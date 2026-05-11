import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import { useCreatePaymentMutation } from "../redux/services/api";
import { router } from "expo-router";

const REVENUECAT_GOOGLE_API_KEY =
  Constants.expoConfig?.extra?.revenueCat?.androidApiKey ?? "";

const PLAN_META = {
  standard_plan: {
    displayName: "Standard",
    emoji: "⚡",
    accent: "#00C896",
    tag: "POPULAR",
    period: "per month",
    membershipPlanId: "monthly_plan",
  },
  premium_plan: {
    displayName: "Premium",
    emoji: "👑",
    accent: "#7C5CFC",
    tag: "BEST VALUE",
    period: "per year",
    membershipPlanId: "yearly_plan",
  },
};

// Map entitlement → your API's membershipPlanId
const ENTITLEMENT_TO_PLAN = {
  monthly_plan: "monthly_plan",
  yearly_plan: "yearly_plan",
  "Standard Android": "monthly_plan",
  "Premium Android": "yearly_plan",
};

const PRODUCT_TO_PLAN = {
  cat_monthly: "monthly_plan",
  cat_yearly: "yearly_plan",
  subscription_monthly: "monthly_plan",
  subscription_yearly: "yearly_plan",
};

const buildPaymentPayload = (customerInfo, productIdentifier) => {
   ("🔍 Building payment payload with customerInfo:", customerInfo);
  const active = customerInfo.entitlements.active;
  const entitlementKey = Object.keys(active)[0];
  const entitlement = active[entitlementKey];
  const productId = entitlement?.productIdentifier ?? productIdentifier;
  const subInfo =
    customerInfo.subscriptionsByProductIdentifier?.[productId] ?? {};

  const membershipPlanId =
    ENTITLEMENT_TO_PLAN[entitlementKey] ??
    PRODUCT_TO_PLAN[productId] ??
    PRODUCT_TO_PLAN[productIdentifier] ??
    "unknown_plan";

  // ✅ Always calculate from now — never rely on Play Store dates
  const startDate = new Date();
  const endDate = new Date(startDate);

  if (membershipPlanId === "yearly_plan") {
    endDate.setFullYear(endDate.getFullYear() + 1); // ✅ exactly 1 year later
  } else {
    endDate.setMonth(endDate.getMonth() + 1); // ✅ exactly 1 month later
  }

  return {
    sessionId: subInfo.storeTransactionId ?? `rc_session_${Date.now()}`,
    amount: productId === "cat_monthly" ? 900 : 3600,
    currency: "BDT",
    paymentProvider: "google_play",
    transitionId: subInfo.storeTransactionId ?? `rc_txn_${Date.now()}`,
    startDate: startDate.toISOString(), // ✅ always now
    endDate: endDate.toISOString(),     // ✅ +1 month or +1 year from now
    membershipPlanId,
  };
};

export default function Subscriptions() {
  const [createPayment] = useCreatePaymentMutation();
  const [packages, setPackages] = useState([]);
  const [offeringMap, setOfferingMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [billingUnavailable, setBillingUnavailable] = useState(false);
  const [selectedOfferingId, setSelectedOfferingId] = useState(null);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    if (Platform.OS !== "android") {
      setLoading(false);
      return;
    }

    if (!REVENUECAT_GOOGLE_API_KEY) {
      console.warn("RevenueCat Android API key is missing in app config.");
      setLoading(false);
      return;
    }

    const init = async () => {
      Purchases.setLogLevel(LOG_LEVEL.WARN);
      Purchases.configure({ apiKey: REVENUECAT_GOOGLE_API_KEY });
      try {
        const canPay =
          typeof Purchases.canMakePayments === "function"
            ? await Purchases.canMakePayments()
            : true;

        if (!canPay) {
          setBillingUnavailable(true);
          return;
        }

        const result = await Purchases.getOfferings();
        if (!result || Object.keys(result.all).length === 0)
          throw new Error("Empty");

        const map = {};
        const pkgList = [];

        Object.values(result.all).forEach((offering) => {
          offering.availablePackages.forEach((pkg) => {
            map[offering.identifier] = pkg;
            pkgList.push({ offeringId: offering.identifier, pkg });
          });
        });

        setOfferingMap(map);
        setPackages(pkgList);
        if (pkgList.length > 0) {
          setSelectedOfferingId(pkgList[0].offeringId);
        }
      } catch (e) {
        const message = e?.message || "Unable to load offerings";
        if (
          e?.code === "PurchaseNotAllowedError" ||
          message.includes("BILLING_UNAVAILABLE") ||
          message.includes("not allowed to make the purchase")
        ) {
          setBillingUnavailable(true);
        } else {
          console.warn("Failed to fetch offerings:", message);
        }
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const handlePurchase = async () => {
    if (billingUnavailable) {
      Alert.alert(
        "Billing unavailable",
        "Google Play Billing is not available on this device/emulator.",
      );
      return;
    }

    const originalPackage = offeringMap[selectedOfferingId];
    if (!originalPackage) return;

    try {
      setPurchasing(true);

      const { customerInfo, productIdentifier } =
        await Purchases.purchasePackage(originalPackage);

      const active = customerInfo.entitlements.active;

      if (Object.keys(active).length > 0) {
        // Build and send payment payload to your API
        const payload = buildPaymentPayload(customerInfo, productIdentifier);
         ("📦 Payment payload:", JSON.stringify(payload, null, 2));
        try {
          const apiResponse = await createPayment(payload).unwrap();
           ("✅ API response:", JSON.stringify(apiResponse, null, 2));

          Alert.alert("Success", "You're now subscribed!");
          router.replace("/");
        } catch (apiError) {
          const apiMessage =
            apiError?.data?.message ||
            apiError?.error ||
            apiError?.message ||
            "Failed to sync subscription with your server.";

           ("❌ Payment sync error:", apiError);
          Alert.alert("Purchase completed", apiMessage);
        }
      }
    } catch (e) {
      if (!e?.userCancelled) {
        const message = e?.message || "Purchase failed";
         ("❌ Purchase error:", message);
        Alert.alert("Purchase failed", message);
      } else {
         ("🚫 User cancelled purchase");
      }
    } finally {
      setPurchasing(false);
    }
  };

  const handleRestore = async () => {
    if (billingUnavailable) {
      Alert.alert(
        "Billing unavailable",
        "Google Play Billing is not available on this device/emulator.",
      );
      return;
    }

    try {
      setPurchasing(true);
      const customerInfo = await Purchases.restorePurchases();
      const active = customerInfo.entitlements.active;
      if (Object.keys(active).length > 0) {
        Alert.alert("Restored", "Your purchases have been restored.");
      } else {
        Alert.alert("Nothing to restore", "No previous purchases found.");
      }
    } catch (e) {
      Alert.alert("Restore failed", e.message);
    } finally {
      setPurchasing(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00C896" />
        <Text style={styles.loadingText}>Loading plans...</Text>
      </View>
    );
  }

  if (packages.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          {!REVENUECAT_GOOGLE_API_KEY
            ? "RevenueCat Android API key is missing. Add expo.extra.revenueCat.androidApiKey in app.json."
            : billingUnavailable
              ? "Billing is unavailable on this emulator/device. Use a Play Store-enabled emulator or a real device."
              : "No plans available right now."}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.pillBadge}>
          <Text style={styles.pillText}>UPGRADE</Text>
        </View>
        <Text style={styles.headline}>Choose your{"\n"}plan</Text>
        <Text style={styles.subheadline}>
          Unlock the full power of MY Money Sorted
        </Text>
      </View>

      <View style={styles.cards}>
        {packages.map(({ offeringId, pkg }) => {
          const meta = PLAN_META[offeringId] ?? {
            emoji: "✦",
            accent: "#00C896",
            tag: null,
            period: "",
          };
          const isSelected = selectedOfferingId === offeringId;

          return (
            <TouchableOpacity
              key={offeringId}
              activeOpacity={0.88}
              onPress={() => setSelectedOfferingId(offeringId)}
              style={[
                styles.card,
                isSelected && { borderColor: meta.accent, borderWidth: 2 },
              ]}
            >
              <View style={styles.cardTop}>
                <View
                  style={[
                    styles.emojiWrap,
                    { backgroundColor: meta.accent + "18" },
                  ]}
                >
                  <Text style={styles.emoji}>{meta.emoji}</Text>
                </View>
                <View style={styles.cardTopRight}>
                  {meta.tag && (
                    <View
                      style={[styles.tag, { backgroundColor: meta.accent }]}
                    >
                      <Text style={styles.tagText}>{meta.tag}</Text>
                    </View>
                  )}
                  {isSelected && (
                    <View
                      style={[
                        styles.checkCircle,
                        { backgroundColor: meta.accent },
                      ]}
                    >
                      <Text style={styles.checkMark}>✓</Text>
                    </View>
                  )}
                </View>
              </View>

              <Text style={styles.cardTitle}>
                {meta.displayName || pkg.product.title?.split("(")[0].trim()}
              </Text>
              <View style={styles.priceRow}>
                <Text style={[styles.price, { color: meta.accent }]}>
                  {pkg.product.priceString}
                </Text>
                <Text style={styles.period}> / {meta.period}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={[
          styles.cta,
          (!selectedOfferingId || purchasing || billingUnavailable) &&
          styles.ctaDisabled,
        ]}
        disabled={!selectedOfferingId || purchasing || billingUnavailable}
        onPress={handlePurchase}
        activeOpacity={0.85}
      >
        {purchasing ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text
            style={[styles.ctaText, !selectedOfferingId && styles.ctaTextMuted]}
          >
            {selectedOfferingId ? "Continue" : "Select a plan"}
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.restoreBtn}
        onPress={handleRestore}
        disabled={purchasing}
      >
        <Text style={styles.restoreText}>Restore purchases</Text>
      </TouchableOpacity>

      <Text style={styles.legalText}>
        Subscriptions auto-renew unless cancelled. Cancel anytime.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F7F7" },
  content: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 48 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    gap: 14,
  },
  loadingText: { color: "#999", fontSize: 14, fontWeight: "500" },
  errorText: { color: "#aaa", fontSize: 14 },
  header: { marginBottom: 36 },
  pillBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  pillText: {
    color: "#999",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
  },
  headline: {
    fontSize: 40,
    fontWeight: "800",
    color: "#111",
    lineHeight: 46,
    marginBottom: 10,
    letterSpacing: -1,
  },
  subheadline: { fontSize: 16, color: "#999", fontWeight: "400" },
  cards: { gap: 16, marginBottom: 32 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTopRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  emojiWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: { fontSize: 22 },
  tag: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  tagText: { color: "#fff", fontSize: 9, fontWeight: "800", letterSpacing: 1 },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: { color: "#fff", fontSize: 12, fontWeight: "700" },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  priceRow: { flexDirection: "row", alignItems: "baseline" },
  price: { fontSize: 30, fontWeight: "800", letterSpacing: -0.5 },
  period: { fontSize: 14, color: "#bbb", fontWeight: "500" },
  cta: {
    backgroundColor: "#00C896",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 16,
    minHeight: 56,
    justifyContent: "center",
  },
  ctaDisabled: { backgroundColor: "#E8E8E8" },
  ctaText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.3,
  },
  ctaTextMuted: { color: "#bbb" },
  restoreBtn: { alignItems: "center", paddingVertical: 12, marginBottom: 16 },
  restoreText: {
    color: "#bbb",
    fontSize: 13,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  legalText: {
    textAlign: "center",
    fontSize: 11,
    color: "#ccc",
    lineHeight: 16,
  },
});
