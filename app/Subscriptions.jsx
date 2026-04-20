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
import Purchases, { LOG_LEVEL } from "react-native-purchases";

const REVENUECAT_GOOGLE_API_KEY = "goog_RHyMIIcFPPRycIdmTcwllyvMnDJ";
const ACCENT = "#00C896";

const LOCAL_FREE_PLAN_RESPONSE = {
  identifier: "$rc_free_plan",
  offeringIdentifier: "local_free",
  packageType: "CUSTOM",
  presentedOfferingContext: {
    offeringIdentifier: "local_free",
    placementIdentifier: null,
    targetingContext: null,
  },
  product: {
    identifier: "budgetiq_free_plan",
    title: "Free Plan",
    description:
      "Start managing your money with smart AI support - completely free.",
    price: 0,
    priceString: "Free",
    currencyCode: "BDT",
  },
  webCheckoutUrl: null,
};

const FALLBACK_CONTENT = {
  FREE: {
    title: "Free Plan",
    description:
      "Start managing your money with smart AI support - completely free.",
    badge: "FREE",
    benefits: [
      "Track daily expenses (simple & fast)",
      "Basic AI insights on spending habits",
      "Simple reports to understand your money",
      "Limited usage access",
    ],
  },
  MONTHLY: {
    title: "Monthly Plan",
    description:
      "Unlock unlimited AI insights and take full control of your finances.",
    badge: "MOST POPULAR",
    benefits: [
      "Unlimited expense tracking",
      "Full AI-powered recommendations",
      "Advanced reports & analytics",
      "Full access for 30 days",
    ],
  },
  ANNUAL: {
    title: "Yearly Plan",
    description:
      "Build long-term financial habits and save more with full-year access.",
    badge: "BEST VALUE",
    benefits: [
      "Everything in Monthly plan",
      "Unlimited AI usage",
      "Long-term financial insights",
      "Full access for 1 year (save more)",
    ],
  },
};

const getPlanDisplayTitle = (plan) => {
  if (plan.source === "local_free") return FALLBACK_CONTENT.FREE.title;

  const rawTitle = (plan.title || "")
    .replace(/unreviewed/gi, "")
    .replace(/[()]/g, "")
    .replace(/com\.[^\s]+/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (rawTitle) return rawTitle;

  if (plan.packageType === "ANNUAL") return "Yearly Plan";
  if (plan.packageType === "MONTHLY") return "Monthly Plan";
  return "Premium Plan";
};

const getPlanDescription = (plan) => {
  const trimmedStoreDescription = (plan.summaryDescription || "").trim();
  if (trimmedStoreDescription) return trimmedStoreDescription;

  if (plan.source === "local_free") return FALLBACK_CONTENT.FREE.description;

  // Fallback to hardcoded content based on package type
  if (plan.packageType === "ANNUAL") return FALLBACK_CONTENT.ANNUAL.description;
  if (plan.packageType === "MONTHLY") return FALLBACK_CONTENT.MONTHLY.description;

  return "";
};

const getPlanBadge = (plan) => {
  if (plan.source === "local_free") return FALLBACK_CONTENT.FREE.badge;
  if (plan.packageType === "ANNUAL") return FALLBACK_CONTENT.ANNUAL.badge;
  if (plan.packageType === "MONTHLY") return FALLBACK_CONTENT.MONTHLY.badge;
  return "PAID PLAN";
};

const getPlanBenefits = (plan) => {
  if (Array.isArray(plan.benefits) && plan.benefits.length > 0) {
    return plan.benefits;
  }

  if (plan.source === "local_free") return FALLBACK_CONTENT.FREE.benefits;

  // Fallback to hardcoded benefits based on package type
  if (plan.packageType === "ANNUAL") return FALLBACK_CONTENT.ANNUAL.benefits;
  if (plan.packageType === "MONTHLY") return FALLBACK_CONTENT.MONTHLY.benefits;

  return [];
};

const extractBenefitsFromMetadata = (metadata, packageType) => {
  if (!metadata || typeof metadata !== "object") return [];

  const normalizedType = (packageType || "").toLowerCase();
  const typedKeys = [
    `benefits_${normalizedType}`,
    `features_${normalizedType}`,
    `${normalizedType}_benefits`,
    `${normalizedType}_features`,
  ];

  for (const key of typedKeys) {
    const value = metadata[key];
    if (Array.isArray(value)) {
      return value.map((item) => String(item).trim()).filter(Boolean);
    }
    if (typeof value === "string") {
      return value
        .split(/\n|\||,/)
        .map((item) => item.replace(/^[-*•\s]+/, "").trim())
        .filter(Boolean);
    }
  }

  const benefitKeys = ["benefits", "features", "feature_list"];
  for (const key of benefitKeys) {
    const value = metadata[key];
    if (Array.isArray(value)) {
      return value.map((item) => String(item).trim()).filter(Boolean);
    }
    if (typeof value === "string") {
      return value
        .split(/\n|\||,/)
        .map((item) => item.replace(/^[-*•\s]+/, "").trim())
        .filter(Boolean);
    }
  }

  return [];
};

const parseDescription = (descriptionText) => {
  const cleaned = (descriptionText || "").trim();
  if (!cleaned) return { summary: "", benefits: [] };

  const lines = cleaned
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return { summary: cleaned, benefits: [] };
  }

  const summary = lines[0];
  const benefits = lines
    .slice(1)
    .map((line) => line.replace(/^[-*•\d.)\s]+/, "").trim())
    .filter(Boolean);

  return { summary, benefits };
};

export default function Subscriptions() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [selectedPlanKey, setSelectedPlanKey] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (Platform.OS !== "android") {
      setLoading(false);
      return;
    }

    const init = async () => {
      Purchases.setLogLevel(LOG_LEVEL.WARN);
      Purchases.configure({ apiKey: REVENUECAT_GOOGLE_API_KEY });

      try {
        const result = await Purchases.getOfferings();
        if (!result || Object.keys(result.all).length === 0) {
          throw new Error("Empty");
        }

        const allPlans = [];
        const offeringsToRender = Object.values(result.all || {});

        offeringsToRender.forEach((offering) => {
          (offering.availablePackages || []).forEach((pkg) => {
            const parsedDescription = parseDescription(pkg.product.description);
            const metadataBenefits = extractBenefitsFromMetadata(
              offering.metadata,
              pkg.packageType,
            );

            allPlans.push({
              key: `${offering.identifier}:${pkg.identifier}:${pkg.product.identifier}`,
              source: "revenuecat",
              offeringId: offering.identifier,
              packageId: pkg.identifier,
              productId: pkg.product.identifier,
              title: pkg.product.title,
              description: pkg.product.description,
              summaryDescription: parsedDescription.summary,
              price: pkg.product.priceString,
              packageType: pkg.packageType,
              rcPackage: pkg,
              benefits:
                metadataBenefits.length > 0
                  ? metadataBenefits
                  : parsedDescription.benefits,
            });
          });
        });

        allPlans.push({
          key: "local_free:plan",
          source: "local_free",
          offeringId: LOCAL_FREE_PLAN_RESPONSE.offeringIdentifier,
          packageId: LOCAL_FREE_PLAN_RESPONSE.identifier,
          productId: LOCAL_FREE_PLAN_RESPONSE.product.identifier,
          title: LOCAL_FREE_PLAN_RESPONSE.product.title,
          description: LOCAL_FREE_PLAN_RESPONSE.product.description,
          summaryDescription: LOCAL_FREE_PLAN_RESPONSE.product.description,
          price: LOCAL_FREE_PLAN_RESPONSE.product.priceString,
          packageType: LOCAL_FREE_PLAN_RESPONSE.packageType,
          rcLikeResponse: LOCAL_FREE_PLAN_RESPONSE,
          benefits: FALLBACK_CONTENT.FREE.benefits,
          isFeatured: true,
        });

        setPlans(allPlans);
        setSelectedPlanKey(allPlans[0]?.key ?? null);
      } catch (e) {
        const message = e?.message || "Unable to load offerings";
        setLoadError(message);
        console.warn("Failed to fetch offerings:", message);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const onPlanPress = (plan) => {
    setSelectedPlanKey(plan.key);
  };

  const handleContinue = async () => {
    const selectedPlan = plans.find((plan) => plan.key === selectedPlanKey);
    if (!selectedPlan || processing) return;

    if (selectedPlan.source === "revenuecat" && !selectedPlan.rcPackage) {
      Alert.alert(
        "Plan unavailable",
        "This subscription package is not available right now.",
      );
      return;
    }

    if (selectedPlan.source === "local_free") {
      const now = Date.now();
      const freePlanActivationResponse = {
        customerInfo: {
          entitlements: {
            active: {
              LocalFreePlan: {
                productIdentifier: selectedPlan.productId,
                purchaseDate: new Date(now).toISOString(),
                expirationDate: null,
              },
            },
          },
        },
        productIdentifier: selectedPlan.productId,
        source: "local_free",
      };
      Alert.alert("Free Plan Activated", "You are now using the Free plan.");
      return;
    }

    try {
      setProcessing(true);
      const purchaseResponse = await Purchases.purchasePackage(
        selectedPlan.rcPackage,
      );
      console.log(
        "Purchase response:",
        JSON.stringify(purchaseResponse, null, 2),
      );
      Alert.alert("Success", "Subscription purchased successfully.");
    } catch (e) {
      if (!e?.userCancelled) {
        const errorMessage = e?.message || "Something went wrong.";
        if (/could not be found|not found/i.test(errorMessage)) {
          Alert.alert(
            "Purchase unavailable",
            "The selected item could not be found in Google Play for this build. Make sure the app is installed from an internal test or production track, and that the subscription is active and published for this account.",
          );
          return;
        }

        Alert.alert("Purchase failed", errorMessage);
      }
    } finally {
      setProcessing(false);
    }
  };

  const handleRestore = async () => {
    try {
      setProcessing(true);
      const restoreResponse = await Purchases.restorePurchases();
      Alert.alert("Restore complete", "Purchases restored.");
    } catch (e) {
      Alert.alert("Restore failed", e?.message || "Something went wrong.");
    } finally {
      setProcessing(false);
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

  if (plans.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          {loadError
            ? `Unable to load plans: ${loadError}`
            : "No plans available right now. Set a Current Offering in RevenueCat and attach packages."}
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
      <View style={styles.headerWrap}>
        <Text style={styles.heading}>Choose your plan</Text>
        <Text style={styles.subHeading}>Flexible pricing for every budget.</Text>
      </View>

      {plans.map((plan) => {
        const isSelected = selectedPlanKey === plan.key;
        const isLocalFree = plan.source === "local_free";
        const displayTitle = getPlanDisplayTitle(plan);
        const description = getPlanDescription(plan);
        const benefits = getPlanBenefits(plan);
        const badgeText = getPlanBadge(plan);
        return (
          <TouchableOpacity
            key={plan.key}
            activeOpacity={0.9}
            onPress={() => onPlanPress(plan)}
            style={[
              styles.planItem,
              isSelected && styles.planItemSelected,
              isLocalFree && styles.localTrialCard,
            ]}
          >
            <View style={styles.titleRow}>
              <Text style={styles.planTitle}>{displayTitle}</Text>
              {isLocalFree ? (
                <View style={styles.badgeFeatured}>
                  <Text style={styles.badgeText}>{badgeText}</Text>
                </View>
              ) : (
                <View style={styles.badgeStandard}>
                  <Text style={styles.badgeText}>{badgeText}</Text>
                </View>
              )}
            </View>
            {!!description && (
              <Text style={styles.planDescription}>{description}</Text>
            )}
            <Text style={styles.planPrice}>{plan.price}</Text>
            {benefits.length > 0 && (
              <View style={styles.benefitsWrap}>
                {benefits.map((benefit) => (
                  <View key={`${plan.key}-${benefit}`} style={styles.benefitRow}>
                    <Text style={styles.benefitDot}>•</Text>
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>
            )}
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={[
          styles.primaryButton,
          (!selectedPlanKey || processing) && styles.primaryButtonDisabled,
        ]}
        disabled={!selectedPlanKey || processing}
        onPress={handleContinue}
      >
        {processing ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.primaryButtonText}>Continue</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.restoreButton}
        onPress={handleRestore}
        disabled={processing}
      >
        <Text style={styles.restoreText}>Restore purchases</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F8FB" },
  content: { paddingHorizontal: 16, paddingTop: 22, paddingBottom: 28 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F6F8FB",
  },
  loadingText: { fontSize: 14, color: "#555", marginTop: 10 },
  errorText: { fontSize: 14, color: "#B00020", textAlign: "center" },
  headerWrap: { marginBottom: 16 },
  heading: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
    color: "#111",
  },
  subHeading: {
    fontSize: 14,
    color: "#5A6472",
  },
  planItem: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#fff",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  planItemSelected: {
    borderColor: ACCENT,
    borderWidth: 2,
  },
  localTrialCard: {
    backgroundColor: "#F0FDF9",
    borderColor: "#B9F2E2",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  badgeFeatured: {
    backgroundColor: ACCENT,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeStandard: {
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: { fontSize: 10, fontWeight: "700", color: "#0F172A" },
  planTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    flex: 1,
    paddingRight: 8,
  },
  planDescription: { fontSize: 13, color: "#475569", marginBottom: 8 },
  planPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 10,
  },
  benefitsWrap: {
    marginTop: 2,
    gap: 4,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  benefitDot: {
    color: "#0F172A",
    fontSize: 12,
    lineHeight: 18,
    marginRight: 6,
  },
  benefitText: {
    flex: 1,
    fontSize: 12,
    color: "#64748B",
    lineHeight: 18,
  },
  primaryButton: {
    backgroundColor: ACCENT,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    marginTop: 10,
  },
  primaryButtonDisabled: {
    opacity: 0.5,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  restoreButton: {
    marginTop: 14,
    paddingVertical: 10,
    alignItems: "center",
  },
  restoreText: {
    color: "#64748B",
    fontSize: 13,
    textDecorationLine: "underline",
  },
});
