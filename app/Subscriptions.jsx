import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Purchases from "react-native-purchases";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../Constants/Colors";
import { useCreatePaymentMutation } from "../redux/services/api";

const SHARED_PLAN_FEATURES = [
  "Track income and expenditure in one place",
  "Simple dashboard for money overview",
  "Money-management specialist AI chatbot",
  "Category-based transaction organization",
];

const getDurationLabelFromType = ({ isFree, packageType }) => {
  if (isFree || packageType === "WEEKLY") return "7 days";
  if (packageType === "ANNUAL") return "1 year";
  return "30 days";
};

const getPlanNameFromType = ({ isFree, packageType }) => {
  if (isFree || packageType === "WEEKLY") return "Free Plan";
  if (packageType === "ANNUAL") return "Premium Plan";
  return "Standard Plan";
};

const FREE_PLAN = {
  id: "free-plan-local",
  offeringId: "local",
  packageId: "free",
  packageType: "FREE",
  title: "Free Plan",
  description: "All app features included for 7 days.",
  price: "$0",
  billingCycle: "Access duration: 7 days",
  productId: "free_plan_local",
  isFree: true,
  features: SHARED_PLAN_FEATURES,
  rcPackage: null,
};

const getPackageBadge = (plan) => {
  return getDurationLabelFromType(plan);
};

const getBillingCycle = (packageType) => {
  if (packageType === "ANNUAL") return "Access duration: 1 year";
  if (packageType === "MONTHLY") return "Access duration: 30 days";
  if (packageType === "WEEKLY") return "Access duration: 7 days";
  return "Access duration: 30 days";
};

const getPlanDurationDays = (plan) => {
  if (plan?.isFree) return 7;
  if (plan?.packageType === "MONTHLY") return 30;
  if (plan?.packageType === "ANNUAL") return 365;
  if (plan?.packageType === "WEEKLY") return 7;
  return 30;
};

const getPlanTone = (plan) => {
  if (plan?.isFree) {
    return {
      bg: "#F5FCF8",
      border: "#D2EFE2",
      accent: Colors.primary,
    };
  }

  if (plan?.packageType === "ANNUAL") {
    return {
      bg: "#F1FBF6",
      border: "#C7EBD9",
      accent: Colors.primary,
    };
  }

  if (plan?.packageType === "MONTHLY") {
    return {
      bg: "#F7FDFA",
      border: "#D9F2E5",
      accent: Colors.primary,
    };
  }

  return {
    bg: "#F7FDFA",
    border: "#D9F2E5",
    accent: Colors.primary,
  };
};

const buildPlanDateRange = (plan, purchaseResult) => {
  const transactionInfo = purchaseResult?.transaction || {};
  const subscriptionInfo =
    purchaseResult?.customerInfo?.subscriptionsByProductIdentifier?.[
    plan?.productId
    ] || {};

  const startDate =
    subscriptionInfo?.purchaseDate ||
    transactionInfo?.purchaseDate ||
    new Date().toISOString();

  const startTime = new Date(startDate).getTime();
  const durationDays = getPlanDurationDays(plan);
  const endTime = Number.isNaN(startTime)
    ? Date.now() + durationDays * 24 * 60 * 60 * 1000
    : startTime + durationDays * 24 * 60 * 60 * 1000;

  return {
    startDate,
    endDate: new Date(endTime).toISOString(),
  };
};

const buildPackages = (offerings) => {
  const allOfferings = Object.values(offerings?.all || {});
  const items = [];

  allOfferings.forEach((offering) => {
    (offering?.availablePackages || []).forEach((pkg) => {
      const product = pkg?.product;
      if (!product?.identifier) return;

      items.push({
        id: `${offering.identifier}:${pkg.identifier}:${product.identifier}`,
        offeringId: offering.identifier,
        packageId: pkg.identifier,
        packageType: pkg.packageType,
        title: getPlanNameFromType({ packageType: pkg.packageType, isFree: false }),
        description: `All app features included for ${getDurationLabelFromType({ packageType: pkg.packageType, isFree: false })}.`,
        price: product.priceString || "",
        billingCycle: getBillingCycle(pkg.packageType),
        productId: product.identifier,
        isFree: false,
        features: SHARED_PLAN_FEATURES,
        rcPackage: pkg,
      });
    });
  });

  return items;
};

const buildLocalFreePlanPurchaseResult = (plan) => {
  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  const transactionId = `local_free_${nowMs}`;
  const localProductId = plan?.productId || "free_plan_local";
  const localEntitlementId = "free_plan";

  const localSubscription = {
    expiresDate: null,
    productIdentifier: localProductId,
    storeTransactionId: transactionId,
    willRenew: false,
    price: {
      amount: 0,
      currency: "USD",
    },
    purchaseDate: nowIso,
    periodType: "NORMAL",
    originalPurchaseDate: nowIso,
    isSandbox: true,
    isActive: true,
    billingIssuesDetectedAt: null,
    store: "PROMOTIONAL",
    unsubscribeDetectedAt: null,
    gracePeriodExpiresDate: null,
    ownershipType: "PURCHASED",
    refundedAt: null,
  };

  const localEntitlement = {
    originalPurchaseDate: nowIso,
    identifier: localEntitlementId,
    latestPurchaseDateMillis: nowMs,
    willRenew: false,
    periodType: "NORMAL",
    originalPurchaseDateMillis: nowMs,
    store: "PROMOTIONAL",
    unsubscribeDetectedAtMillis: null,
    billingIssueDetectedAt: null,
    ownershipType: "PURCHASED",
    productPlanIdentifier: null,
    expirationDateMillis: null,
    productIdentifier: localProductId,
    isSandbox: true,
    unsubscribeDetectedAt: null,
    expirationDate: null,
    verification: "NOT_REQUESTED",
    latestPurchaseDate: nowIso,
    isActive: true,
    billingIssueDetectedAtMillis: null,
  };

  return {
    customerInfo: {
      originalApplicationVersion: "1.0",
      subscriptionsByProductIdentifier: {
        [localProductId]: localSubscription,
      },
      entitlements: {
        all: {
          [localEntitlementId]: localEntitlement,
        },
        active: {
          [localEntitlementId]: localEntitlement,
        },
        verification: "NOT_REQUESTED",
      },
      originalPurchaseDateMillis: nowMs,
      allExpirationDates: {
        [localProductId]: null,
      },
      managementURL: null,
      nonSubscriptionTransactions: [],
      requestDate: nowIso,
      allPurchaseDatesMillis: {
        [localProductId]: nowMs,
      },
      activeSubscriptions: [localProductId],
      allPurchaseDates: {
        [localProductId]: nowIso,
      },
      allPurchasedProductIdentifiers: [localProductId],
      originalPurchaseDate: nowIso,
      requestDateMillis: nowMs,
      allExpirationDatesMillis: {
        [localProductId]: null,
      },
      originalAppUserId: "$LOCAL_FREE_PLAN_USER",
      latestExpirationDate: null,
      firstSeen: nowIso,
      firstSeenMillis: nowMs,
      latestExpirationDateMillis: null,
    },
    transaction: {
      productId: localProductId,
      purchaseDate: nowIso,
      purchaseToken: null,
      purchaseDateMillis: nowMs,
      productIdentifier: localProductId,
      revenueCatId: transactionId,
      transactionIdentifier: transactionId,
    },
    productIdentifier: localProductId,
  };
};

const Subscriptions = () => {
  const router = useRouter();
  const [createPayment] = useCreatePaymentMutation();
  const [plans, setPlans] = useState([]);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        setError("");

        const offerings = await Purchases.getOfferings();
        const paidPackages = buildPackages(offerings);
        const allPackages = [FREE_PLAN, ...paidPackages];

        if (paidPackages.length === 0) {
          setError(
            "Paid plans are unavailable right now. You can continue with the Free Plan.",
          );
        }

        setPlans(allPackages);
        setSelectedPlanId(allPackages[0].id);
      } catch (e) {
        setError(e?.message || "Failed to load subscription plans.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === selectedPlanId) || null,
    [plans, selectedPlanId],
  );

  const handlePurchase = async () => {
    if (!selectedPlan || processing) return;

    try {
      setProcessing(true);
      let purchaseResult;

      if (selectedPlan.isFree) {
        purchaseResult = buildLocalFreePlanPurchaseResult(selectedPlan);
      } else {
        if (!selectedPlan.rcPackage) return;
        purchaseResult = await Purchases.purchasePackage(selectedPlan.rcPackage);
      }

      const productId = selectedPlan.productId;
      const { startDate, endDate } = buildPlanDateRange(
        selectedPlan,
        purchaseResult,
      );
      const subscriptionInfo =
        purchaseResult?.customerInfo?.subscriptionsByProductIdentifier?.[
        productId
        ];
      const transactionInfo = purchaseResult?.transaction || {};
      const amount = Number(subscriptionInfo?.price?.amount ?? 0);
      const currency = (
        subscriptionInfo?.price?.currency || "usd"
      ).toLowerCase();
      const transitionId =
        transactionInfo?.transactionIdentifier ||
        transactionInfo?.revenueCatId ||
        `tr_${Date.now()}`;

      const paymentPayload = {
        sessionId: `sess_${Date.now()}`,
        amount,
        currency,
        paymentProvider: selectedPlan.isFree ? "local" : "stripe",
        transitionId,
        membershipPlanId: productId,
        endDate,
        startDate,
      };

      const paymentResponse = await createPayment(paymentPayload).unwrap();
      console.log(
        "app-payment-init response:",
        JSON.stringify(paymentResponse, null, 2),
      );

      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: "Your purchase is in review.",
        visibilityTime: 3000,
        autoHide: true,
      });

      router.replace("/LoginScreen");
    } catch (e) {
      if (e?.userCancelled) return;
      console.log(
        "app-payment-init error:",
        JSON.stringify(
          {
            message: e?.data?.message || e?.message || "Unknown error",
            status: e?.status || e?.originalStatus || null,
            data: e?.data || null,
          },
          null,
          2,
        ),
      );
      Alert.alert("Purchase failed", e?.message || "Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const handleRestore = async () => {
    if (processing) return;

    try {
      setProcessing(true);
      await Purchases.restorePurchases();
      Alert.alert("Restore complete", "Purchases restored successfully.");
    } catch (e) {
      Alert.alert("Restore failed", e?.message || "Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerWrap}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.secondaryText}>Loading subscription plans...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Text style={styles.eyebrow}>Budget IQ Premium</Text>
          <Text style={styles.title}>Choose a plan that fits your pace</Text>
          <Text style={styles.subtitle}>
            Same features in every plan, only duration changes.
          </Text>

          <View style={styles.benefitsRow}>
            <View style={styles.benefitPill}>
              <Ionicons name="analytics-outline" size={14} color="#0F766E" />
              <Text style={styles.benefitText}>Track income & expenditure</Text>
            </View>
            <View style={styles.benefitPill}>
              <Ionicons name="flash-outline" size={14} color="#0F766E" />
              <Text style={styles.benefitText}>AI money specialist chat</Text>
            </View>
            <View style={styles.benefitPill}>
              <Ionicons name="shield-checkmark-outline" size={14} color="#0F766E" />
              <Text style={styles.benefitText}>Simple money dashboard</Text>
            </View>
          </View>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Text style={styles.sectionTitle}>Available Plans</Text>
        {plans.map((plan) => {
          const isSelected = plan.id === selectedPlanId;
          const tone = getPlanTone(plan);

          return (
            <TouchableOpacity
              key={plan.id}
              style={[
                styles.planCard,
                {
                  borderColor: isSelected ? tone.accent : tone.border,
                  backgroundColor: tone.bg,
                },
                isSelected && styles.planCardActive,
              ]}
              activeOpacity={0.92}
              onPress={() => setSelectedPlanId(plan.id)}
            >
              <View style={styles.planHeaderRow}>
                <View style={styles.planTitleWrap}>
                  <View style={styles.radioWrap}>
                    <View
                      style={[
                        styles.radioOuter,
                        { borderColor: tone.accent },
                        isSelected && { backgroundColor: tone.accent },
                      ]}
                    >
                      {isSelected ? <View style={styles.radioInner} /> : null}
                    </View>
                  </View>
                  <Text style={styles.planTitle}>{plan.title}</Text>
                </View>

                <View style={[styles.badge, { backgroundColor: "#FFFFFF" }]}>
                  <Text style={[styles.badgeText, { color: tone.accent }]}>
                    {getPackageBadge(plan)}
                  </Text>
                </View>
              </View>

              {plan.description ? (
                <Text style={styles.planDescription}>{plan.description}</Text>
              ) : null}

              <View style={styles.priceRow}>
                <Text style={styles.priceText}>{plan.price}</Text>
                <Text style={styles.billingText}>{plan.billingCycle}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {selectedPlan ? (
          <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>Included in every plan</Text>

            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Selected plan</Text>
              <Text style={styles.detailsValue}>{selectedPlan.title}</Text>
            </View>

            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Duration</Text>
              <Text style={styles.detailsValue}>
                {getDurationLabelFromType(selectedPlan)}
              </Text>
            </View>

            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Renewal</Text>
              <Text style={styles.detailsValue}>
                {selectedPlan.isFree ? "No auto-renewal" : "Auto-renewing"}
              </Text>
            </View>

            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Billing cycle</Text>
              <Text style={styles.detailsValue}>{selectedPlan.billingCycle}</Text>
            </View>

            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Features</Text>
              <Text style={styles.detailsValue}>
                Same in all plans
              </Text>
            </View>

            <View style={styles.featuresWrap}>
              {selectedPlan.features.map((feature) => (
                <View key={feature} style={styles.featureRow}>
                  <Ionicons name="checkmark-circle" size={16} color="#15803D" />
                  <Text style={styles.featureItem}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        <TouchableOpacity
          style={[
            styles.purchaseButton,
            (!selectedPlan || processing) && styles.disabledButton,
          ]}
          onPress={handlePurchase}
          disabled={!selectedPlan || processing}
        >
          {processing ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.purchaseButtonText}>
              {selectedPlan?.isFree
                ? "Start with Free Plan"
                : "Continue to Purchase"}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.restoreButton}
          onPress={handleRestore}
          disabled={processing}
        >
          <Text style={styles.restoreText}>Restore Purchases</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heroCard: {
    borderRadius: 16,
    padding: 18,
    backgroundColor: "#F5FCF8",
    borderWidth: 1,
    borderColor: "#D2EFE2",
    marginBottom: 16,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    color: Colors.primary,
    textTransform: "uppercase",
  },
  centerWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    color: "#101828",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "#475467",
  },
  benefitsRow: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  benefitPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#ECF9F2",
  },
  benefitText: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#101828",
    marginBottom: 10,
  },
  secondaryText: {
    marginTop: 10,
    fontSize: 14,
    color: "#667085",
  },
  errorText: {
    marginBottom: 14,
    marginTop: 2,
    color: "#B42318",
    fontSize: 13,
  },
  planCard: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 14,
    marginBottom: 12,
  },
  planCardActive: {
    borderWidth: 2,
    transform: [{ scale: 1.01 }],
  },
  planHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  planTitleWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radioWrap: {
    marginRight: 8,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
  planTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
  },
  badge: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
  },
  planDescription: {
    marginTop: 8,
    fontSize: 13,
    color: "#475467",
    lineHeight: 18,
  },
  priceRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#101828",
  },
  billingText: {
    fontSize: 12,
    color: "#475467",
    fontWeight: "600",
  },
  detailsCard: {
    marginTop: 4,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DDE3EA",
    padding: 16,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#101828",
    marginBottom: 12,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 8,
  },
  detailsLabel: {
    flex: 1,
    fontSize: 13,
    color: "#475467",
  },
  detailsValue: {
    flex: 1,
    textAlign: "right",
    fontSize: 13,
    color: "#243B53",
    fontWeight: "600",
  },
  featuresWrap: {
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#EEF2F6",
    paddingTop: 10,
    gap: 8,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  featureItem: {
    flex: 1,
    fontSize: 14,
    color: "#243B53",
    lineHeight: 20,
  },
  purchaseButton: {
    marginTop: 4,
    minHeight: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    shadowColor: "#1B9C68",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  disabledButton: {
    opacity: 0.6,
  },
  purchaseButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  restoreButton: {
    marginTop: 16,
    alignItems: "center",
  },
  restoreText: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: 13,
  },
});