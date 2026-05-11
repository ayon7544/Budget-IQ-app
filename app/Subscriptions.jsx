import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import Toast from "react-native-toast-message";
import { useCreatePaymentMutation } from "../redux/services/api";
import { router } from "expo-router";

const REVENUECAT_GOOGLE_API_KEY =
  Constants.expoConfig?.extra?.revenueCat?.androidApiKey ?? "";

// ─── Theme ────────────────────────────────────────────────────────────────────
const GREEN = {
  900: "#064E3B",
  800: "#065F46",
  700: "#047857",
  600: "#059669",
  500: "#10B981",
  400: "#34D399",
  300: "#6EE7B7",
  200: "#A7F3D0",
  100: "#D1FAE5",
  50:  "#ECFDF5",
};

// ─── Plan metadata ────────────────────────────────────────────────────────────
const PLAN_META = {
  standard_plan: {
    displayName: "Standard",
    tag: "POPULAR",
    period: "/ month",
    membershipPlanId: "monthly_plan",
  },
  premium_plan: {
    displayName: "Premium",
    tag: "BEST VALUE",
    period: "/ year",
    membershipPlanId: "yearly_plan",
  },
};

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

const FREE_BENEFITS = [
  "Basic expense tracking",
  "Up to 10 transactions/month",
  "1 account",
  "7-day access",
];

// ─── Extract benefits from a RevenueCat offering ─────────────────────────────
//
// Priority order:
//  1. offering.metadata.benefits  → string[] set in RevenueCat dashboard
//  2. pkg.product.description     → free-text from Google Play Console,
//                                   split on newlines / bullet chars
//  3. Empty array (render nothing)
//
const extractBenefits = (offering, pkg) => {
  // 1. RevenueCat dashboard metadata: { "benefits": ["...", "..."] }
  const metaBenefits = offering?.metadata?.benefits;
  if (Array.isArray(metaBenefits) && metaBenefits.length > 0) {
    return metaBenefits.map((b) => String(b).trim()).filter(Boolean);
  }

  // 2. Google Play Console product description
  const desc = pkg?.product?.description;
  if (desc && desc.trim().length > 0) {
    return desc
      .split(/\n|•|·|‣|▸|➤|★|-(?=\s)/) // common bullet/line separators
      .map((line) => line.replace(/^[\s•·‣▸➤★\-]+/, "").trim())
      .filter((line) => line.length > 2);
  }

  return [];
};

// ─── Toast helpers ────────────────────────────────────────────────────────────
const showSuccess = (message) =>
  Toast.show({ type: "success", text1: "Success", text2: message, position: "top" });

const showError = (message) =>
  Toast.show({ type: "error", text1: "Error", text2: message, position: "top" });

const showInfo = (message) =>
  Toast.show({ type: "info", text1: "Info", text2: message, position: "top" });

// ─── Payload builders ─────────────────────────────────────────────────────────
const buildFreePaymentPayload = () => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 7);
  return {
    sessionId: `free_session_${Date.now()}`,
    amount: 0,
    currency: "BDT",
    paymentProvider: "free",
    transitionId: `free_txn_${Date.now()}`,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    membershipPlanId: "free_plan",
  };
};

const buildPaymentPayload = (customerInfo, productIdentifier) => {
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

  const startDate = new Date();
  const endDate = new Date(startDate);
  if (membershipPlanId === "yearly_plan") {
    endDate.setFullYear(endDate.getFullYear() + 1);
  } else {
    endDate.setMonth(endDate.getMonth() + 1);
  }

  return {
    sessionId: subInfo.storeTransactionId ?? `rc_session_${Date.now()}`,
    amount: productId === "cat_monthly" ? 900 : 3600,
    currency: "BDT",
    paymentProvider: "google_play",
    transitionId: subInfo.storeTransactionId ?? `rc_txn_${Date.now()}`,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    membershipPlanId,
  };
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Subscriptions() {
  const [createPayment] = useCreatePaymentMutation();
  const [plans, setPlans] = useState([]);
  const [offeringMap, setOfferingMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [billingUnavailable, setBillingUnavailable] = useState(false);
  const [selectedOfferingId, setSelectedOfferingId] = useState("free_plan");
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    if (Platform.OS !== "android") {
      setLoading(false);
      return;
    }
    if (!REVENUECAT_GOOGLE_API_KEY) {
      console.warn("RevenueCat Android API key is missing.");
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
        const planList = [];

        Object.values(result.all).forEach((offering) => {
          offering.availablePackages.forEach((pkg) => {
            map[offering.identifier] = pkg;
            planList.push({
              offeringId: offering.identifier,
              pkg,
              offering,
              benefits: extractBenefits(offering, pkg),
            });
          });
        });

        setOfferingMap(map);
        setPlans(planList);
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

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handlePurchase = async () => {
    if (selectedOfferingId === "free_plan") {
      try {
        setPurchasing(true);
        const payload = buildFreePaymentPayload();

        const apiResponse = await createPayment(payload).unwrap();
      
        showSuccess("Your 7-day free access has started!");
        router.replace("/");
      } catch (apiError) {
        const msg =
          apiError?.data?.message ||
          apiError?.error ||
          apiError?.message ||
          "Failed to activate free plan.";
        console.error("❌ Free plan error:", apiError);
        showError(msg);
      } finally {
        setPurchasing(false);
      }
      return;
    }

    if (billingUnavailable) {
      showInfo("Google Play Billing is not available on this device/emulator.");
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
        const payload = buildPaymentPayload(customerInfo, productIdentifier);
        try {
          const apiResponse = await createPayment(payload).unwrap();
     
          showSuccess("You're now subscribed!");
          router.replace("/");
        } catch (apiError) {
          const msg =
            apiError?.data?.message ||
            apiError?.error ||
            apiError?.message ||
            "Failed to sync subscription.";
          console.error("❌ Payment sync error:", apiError);
          showInfo(msg);
        }
      }
    } catch (e) {
      if (!e?.userCancelled) {
        console.error("❌ Purchase error:", e?.message);
        showError(e?.message || "Something went wrong.");
      }
    } finally {
      setPurchasing(false);
    }
  };

  const handleRestore = async () => {
    if (billingUnavailable) {
      showInfo("Google Play Billing is not available on this device/emulator.");
      return;
    }
    try {
      setPurchasing(true);
      const customerInfo = await Purchases.restorePurchases();
      const active = customerInfo.entitlements.active;
      if (Object.keys(active).length > 0) {
        showSuccess("Your purchases have been restored.");
      } else {
        showInfo("No previous purchases found.");
      }
    } catch (e) {
      showError(e.message);
    } finally {
      setPurchasing(false);
    }
  };

  // ── All plans: Free first, then RevenueCat ─────────────────────────────────
  const allPlans = [
    {
      offeringId: "free_plan",
      displayName: "Free",
      tag: "7-DAY TRIAL",
      period: "7 days",
      priceString: "",
      benefits: FREE_BENEFITS,
    },
    ...plans.map(({ offeringId, pkg, benefits }) => ({
      offeringId,
      displayName:
        PLAN_META[offeringId]?.displayName ||
        pkg.product.title?.split("(")[0].trim(),
      tag: PLAN_META[offeringId]?.tag ?? null,
      period: PLAN_META[offeringId]?.period ?? "",
      priceString: pkg.product.priceString,
      benefits,
    })),
  ];

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <View style={styles.center}>
        <View style={styles.loadingSpinnerWrap}>
          <ActivityIndicator size="large" color={GREEN[600]} />
        </View>
        <Text style={styles.loadingText}>Loading plans…</Text>
      </View>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badgePill}>
          <Text style={styles.badgePillText}>🌿 Go Green</Text>
        </View>
        <Text style={styles.headline}>Pick your plan</Text>
        <Text style={styles.subheadline}>Start free, upgrade anytime</Text>
      </View>

      {/* Cards */}
      <View style={styles.cards}>
        {allPlans.map(({ offeringId, displayName, tag, period, priceString, benefits }) => {
          const isSelected = selectedOfferingId === offeringId;
          return (
            <TouchableOpacity
              key={offeringId}
              activeOpacity={0.88}
              onPress={() => setSelectedOfferingId(offeringId)}
              style={[styles.card, isSelected && styles.cardSelected]}
            >
              {/* Selected glow border accent */}
              {isSelected && <View style={styles.cardAccentBar} />}

              {/* Top row: name + tag + radio */}
              <View style={styles.cardHeader}>
                <View style={styles.cardTitleRow}>
                  <Text style={[styles.cardName, isSelected && styles.cardNameSelected]}>
                    {displayName}
                  </Text>
                  {tag && (
                    <View style={[styles.tag, isSelected && styles.tagSelected]}>
                      <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
                        {tag}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                  {isSelected && <View style={styles.radioInner} />}
                </View>
              </View>

              {/* Price */}
              <View style={styles.priceRow}>
                <Text style={[styles.price, isSelected && styles.priceSelected]}>
                  {priceString}
                </Text>
                <Text style={styles.period}> {period}</Text>
              </View>

              {/* Benefits */}
              {benefits.length > 0 && (
                <>
                  <View style={styles.divider} />
                  <View style={styles.benefitList}>
                    {benefits.map((benefit, i) => (
                      <View key={i} style={styles.benefitRow}>
                        <View style={[styles.checkIcon, isSelected && styles.checkIconSelected]}>
                          <Text style={[styles.checkMark, isSelected && styles.checkMarkSelected]}>
                            ✓
                          </Text>
                        </View>
                        <Text style={[styles.benefitText, isSelected && styles.benefitTextSelected]}>
                          {benefit}
                        </Text>
                      </View>
                    ))}
                  </View>
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={[styles.cta, purchasing && styles.ctaDisabled]}
        disabled={purchasing}
        onPress={handlePurchase}
        activeOpacity={0.85}
      >
        {purchasing ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.ctaText}>
            {selectedOfferingId === "free_plan" ? "Start for free" : "Continue"}
          </Text>
        )}
      </TouchableOpacity>

      {/* Restore */}
      <TouchableOpacity
        style={styles.restoreBtn}
        onPress={handleRestore}
        disabled={purchasing}
      >
        <Text style={styles.restoreText}>Restore purchases</Text>
      </TouchableOpacity>

      <Text style={styles.legalText}>
        Subscriptions auto-renew unless cancelled. Cancel anytime in Play Store settings.
      </Text>

      {/* Toast must be rendered at the root level of your app, but if
          your app doesn't already include it, you can place it here */}
      <Toast />
    </ScrollView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: GREEN[50] },
  content: { paddingHorizontal: 20, paddingTop: 56, paddingBottom: 48 },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GREEN[50],
    gap: 16,
  },
  loadingSpinnerWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: GREEN[100],
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: { color: GREEN[700], fontSize: 14, fontWeight: "500" },

  // Header
  header: { marginBottom: 32 },
  badgePill: {
    alignSelf: "flex-start",
    backgroundColor: GREEN[100],
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: GREEN[200],
  },
  badgePillText: { fontSize: 12, fontWeight: "700", color: GREEN[700], letterSpacing: 0.3 },
  headline: {
    fontSize: 32,
    fontWeight: "800",
    color: GREEN[900],
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subheadline: { fontSize: 15, color: GREEN[700] },

  // Cards
  cards: { gap: 14, marginBottom: 28 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1.5,
    borderColor: "#E5F0EB",
    overflow: "hidden",
    shadowColor: GREEN[800],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardSelected: {
    borderColor: GREEN[500],
    backgroundColor: "#fff",
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 5,
  },

  // Green left accent bar on selected card
  cardAccentBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: GREEN[500],
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingLeft: 8, // compensate for accent bar
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  cardName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#374151",
    letterSpacing: -0.2,
  },
  cardNameSelected: { color: GREEN[800] },

  // Tag
  tag: {
    backgroundColor: "#F3F4F6",
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  tagSelected: { backgroundColor: GREEN[600] },
  tagText: { fontSize: 9, fontWeight: "800", color: "#9CA3AF", letterSpacing: 0.8 },
  tagTextSelected: { color: "#fff" },

  // Radio
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterSelected: { borderColor: GREEN[500] },
  radioInner: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: GREEN[500],
  },

  // Price
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 4,
    paddingLeft: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1F2937",
    letterSpacing: -0.5,
  },
  priceSelected: { color: GREEN[700] },
  period: { fontSize: 13, color: "#9CA3AF", fontWeight: "500" },

  // Divider
  divider: {
    height: 1,
    backgroundColor: GREEN[100],
    marginTop: 14,
    marginBottom: 14,
    marginLeft: 8,
  },

  // Benefits
  benefitList: { gap: 10, paddingLeft: 8 },
  benefitRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
    flexShrink: 0,
  },
  checkIconSelected: { backgroundColor: GREEN[500] },
  checkMark: { fontSize: 10, fontWeight: "900", color: "#9CA3AF" },
  checkMarkSelected: { color: "#fff" },
  benefitText: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
    flex: 1,
  },
  benefitTextSelected: { color: GREEN[900] },

  // CTA
  cta: {
    backgroundColor: GREEN[600],
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: "center",
    marginBottom: 14,
    minHeight: 56,
    justifyContent: "center",
    shadowColor: GREEN[700],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  ctaDisabled: { opacity: 0.45 },
  ctaText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.3,
  },

  // Restore
  restoreBtn: { alignItems: "center", paddingVertical: 10, marginBottom: 14 },
  restoreText: {
    color: GREEN[600],
    fontSize: 13,
    textDecorationLine: "underline",
    fontWeight: "500",
  },

  // Legal
  legalText: {
    textAlign: "center",
    fontSize: 11,
    color: "#9CA3AF",
    lineHeight: 16,
  },
});