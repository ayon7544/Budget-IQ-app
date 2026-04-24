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
import Purchases from "react-native-purchases";
import Toast from "react-native-toast-message";
import { Colors } from "../Constants/Colors";
import { useCreatePaymentMutation } from "../redux/services/api";

const FREE_PLAN = {
  id: "free-plan-local",
  offeringId: "local",
  packageId: "free",
  packageType: "FREE",
  title: "Free Plan",
  description:
    "Track your daily spending and get a clear monthly summary at no cost.",
  price: "$0",
  billingCycle: "No billing",
  productId: "free_plan_local",
  isFree: true,
  features: [
    "Manual expense and income tracking",
    "Basic dashboard overview",
    "Default categories",
    "Data stored securely on device",
  ],
  rcPackage: null,
};

const getPackageBadge = (packageType) => {
  if (packageType === "FREE") return "Free";
  if (packageType === "ANNUAL") return "Best Value";
  if (packageType === "MONTHLY") return "Most Popular";
  if (packageType === "WEEKLY") return "Weekly";
  return "Premium";
};

const getPackageTitle = (pkg) => {
  const title = (pkg?.product?.title || "").trim();
  if (title) return title;

  if (pkg?.packageType === "ANNUAL") return "Yearly Plan";
  if (pkg?.packageType === "MONTHLY") return "Monthly Plan";
  if (pkg?.packageType === "WEEKLY") return "Weekly Plan";
  return "Subscription Plan";
};

const getBillingCycle = (packageType) => {
  if (packageType === "ANNUAL") return "Billed yearly";
  if (packageType === "MONTHLY") return "Billed monthly";
  if (packageType === "WEEKLY") return "Billed weekly";
  return "Recurring subscription";
};

const getPlanDurationDays = (plan) => {
  if (plan?.isFree) return 7;
  if (plan?.packageType === "MONTHLY") return 30;
  if (plan?.packageType === "ANNUAL") return 365;
  if (plan?.packageType === "WEEKLY") return 7;
  return 30;
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
        title: getPackageTitle(pkg),
        description: (product.description || "").trim(),
        price: product.priceString || "",
        billingCycle: getBillingCycle(pkg.packageType),
        productId: product.identifier,
        isFree: false,
        features: [
          "All premium analytics and insights",
          "Priority access to upcoming features",
          "Cross-device purchase restore",
        ],
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Choose your subscription</Text>
      <Text style={styles.subtitle}>
        Unlock premium features and smarter insights.
      </Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {plans.map((plan) => {
        const isSelected = plan.id === selectedPlanId;
        return (
          <TouchableOpacity
            key={plan.id}
            style={[styles.planCard, isSelected && styles.planCardActive]}
            activeOpacity={0.9}
            onPress={() => setSelectedPlanId(plan.id)}
          >
            <View style={styles.planHeaderRow}>
              <Text style={styles.planTitle}>{plan.title}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {getPackageBadge(plan.packageType)}
                </Text>
              </View>
            </View>

            {plan.description ? (
              <Text style={styles.planDescription}>{plan.description}</Text>
            ) : null}

            <Text style={styles.priceText}>{plan.price}</Text>
            <Text style={styles.productMeta}>
              {plan.isFree ? "Source: Local Plan" : `Product: ${plan.productId}`}
            </Text>
          </TouchableOpacity>
        );
      })}

      {selectedPlan ? (
        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Plan details</Text>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Plan type</Text>
            <Text style={styles.detailsValue}>
              {selectedPlan.isFree ? "Free" : "Paid (RevenueCat)"}
            </Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Billing</Text>
            <Text style={styles.detailsValue}>{selectedPlan.billingCycle}</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Renewal</Text>
            <Text style={styles.detailsValue}>
              {selectedPlan.isFree ? "No auto-renewal" : "Auto-renewing"}
            </Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Source</Text>
            <Text style={styles.detailsValue}>
              {selectedPlan.isFree ? "Defined in app code" : "RevenueCat"}
            </Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Offering ID</Text>
            <Text style={styles.detailsValue}>{selectedPlan.offeringId}</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsLabel}>Product ID</Text>
            <Text style={styles.detailsValue}>{selectedPlan.productId}</Text>
          </View>

          <Text style={styles.featuresTitle}>What you get</Text>
          {selectedPlan.features.map((feature) => (
            <Text key={feature} style={styles.featureItem}>
              - {feature}
            </Text>
          ))}
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
              ? "Continue with Free Plan"
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
    paddingBottom: 28,
  },
  centerWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#101828",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 14,
    color: "#667085",
  },
  secondaryText: {
    marginTop: 10,
    fontSize: 14,
    color: "#667085",
  },
  errorText: {
    marginBottom: 12,
    color: "#B42318",
    fontSize: 13,
  },
  planCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E4E7EC",
    padding: 14,
    marginBottom: 12,
  },
  planCardActive: {
    borderColor: Colors.primary,
    borderWidth: 2,
    backgroundColor: "#F6FFF8",
  },
  planHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  planTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
    marginRight: 10,
  },
  badge: {
    backgroundColor: "#E8F6EF",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: "700",
  },
  planDescription: {
    marginTop: 8,
    fontSize: 13,
    color: "#475467",
    lineHeight: 18,
  },
  priceText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "800",
    color: "#101828",
  },
  productMeta: {
    marginTop: 4,
    fontSize: 11,
    color: "#98A2B3",
  },
  detailsCard: {
    marginTop: 6,
    marginBottom: 8,
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E4E7EC",
    padding: 14,
  },
  detailsTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#101828",
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 7,
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
    color: "#101828",
    fontWeight: "600",
  },
  featuresTitle: {
    marginTop: 8,
    marginBottom: 6,
    fontSize: 13,
    fontWeight: "700",
    color: "#101828",
  },
  featureItem: {
    fontSize: 13,
    color: "#344054",
    lineHeight: 19,
  },
  purchaseButton: {
    marginTop: 10,
    minHeight: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
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
    marginTop: 14,
    alignItems: "center",
  },
  restoreText: {
    color: Colors.primary,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});