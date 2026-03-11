import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import Purchases from "react-native-purchases";
import { useCreatePaymentMutation } from "../redux/services/api";
const Subscriptions = () => {
  const [processingPlan, setProcessingPlan] = useState(null);
  const [offerings, setOfferings] = useState(null);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [createPayment] = useCreatePaymentMutation();

  useEffect(() => {
    initializeRevenueCat();
  }, []);

  const initializeRevenueCat = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      setOfferings(offerings);

      const customerInfo = await Purchases.getCustomerInfo();
      setCustomerInfo(customerInfo);

      Purchases.addCustomerInfoUpdateListener((info) => {
        setCustomerInfo(info);
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const verifySubscription = (customerInfo) => {
    const hasActiveEntitlements =
      Object.keys(customerInfo.entitlements.active).length > 0;
    const hasActiveSubscriptions = customerInfo.activeSubscriptions.length > 0;

    const activePremium = customerInfo.entitlements.active["premium"];
    const activeStandard = customerInfo.entitlements.active["standard"];

    if (hasActiveEntitlements && (activePremium || activeStandard)) {
      const entitlement = activePremium || activeStandard;
      const entitlementName = activePremium ? "Premium" : "Standard";

      const isValid =
        entitlement.isActive &&
        new Date(entitlement.expirationDate) > new Date();

      return { isValid, entitlementName, entitlement, type: "entitlement" };
    } else if (hasActiveSubscriptions) {
      return {
        isValid: true,
        entitlementName: "Subscription",
        entitlement: null,
        type: "subscription",
      };
    }

    return {
      isValid: false,
      entitlementName: null,
      entitlement: null,
      type: null,
    };
  };

  const handlePurchase = async (packageIdentifier) => {
    if (processingPlan) return;

    try {
      setProcessingPlan(packageIdentifier);
      let rcPackage = null;

      if (packageIdentifier === "monthly") {
        rcPackage = offerings?.all?.Monthly?.monthly;
      } else if (packageIdentifier === "yearly") {
        rcPackage = offerings?.all?.Yearly?.annual;
      }

      if (!rcPackage) {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error",
          text2: "Subscription package not found.",
          visibilityTime: 3000,
          autoHide: true,
        });
        setProcessingPlan(null);
        return;
      }

      const { customerInfo: purchaseInfo } =
        await Purchases.purchasePackage(rcPackage);

      const verification = verifySubscription(purchaseInfo);

      if (verification.isValid) {
        setCustomerInfo(purchaseInfo);

        const activeProductId = purchaseInfo.activeSubscriptions?.[0];
        const subscription =
          purchaseInfo.subscriptionsByProductIdentifier?.[activeProductId];

        const paymentPayload = {
          sessionId: subscription?.storeTransactionId ?? "",
          amount: Math.round(rcPackage.product.price * 100),
          currency: rcPackage.product.currencyCode?.toLowerCase() ?? "usd",
          paymentProvider: "revenuecat",
          transitionId: subscription?.storeTransactionId ?? "",
          startDate: subscription?.purchaseDate ?? new Date().toISOString(),
          endDate: subscription?.expiresDate ?? new Date().toISOString(),
          membershipPlanId: rcPackage.offeringIdentifier ?? packageIdentifier,
        };

        console.log(paymentPayload);
        try {
          const paymentResult = await createPayment(paymentPayload).unwrap();
        } catch (paymentError) {}

        Toast.show({
          type: "success",
          position: "top",
          text1: "Success",
          text2: `${verification.entitlementName} Access activated!`,
          visibilityTime: 3000,
          autoHide: true,
        });

        setTimeout(() => {
          router.push("Currency");
        }, 1500);
      } else {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Verification Failed",
          text2: "Please contact support or try restoring purchases.",
          visibilityTime: 4000,
          autoHide: true,
        });
      }
    } catch (error) {
      if (error.userCancelled) {
        Toast.show({
          type: "info",
          position: "top",
          text1: "Cancelled",
          text2: "Purchase was cancelled.",
          visibilityTime: 2000,
          autoHide: true,
        });
      } else {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Purchase Failed",
          text2: error.message || "An error occurred during purchase.",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } finally {
      setProcessingPlan(null);
    }
  };

  // ✅ Free trial — no RevenueCat purchase needed, send dates + RC metadata to backend
  const handleFreeTrial = async () => {
    if (processingPlan) return;

    try {
      setProcessingPlan("trial");

      const now = new Date();
      const trialEnd = new Date(now);
      trialEnd.setDate(trialEnd.getDate() + 7);

      const paymentPayload = {
        sessionId: `trial_${customerInfo?.originalAppUserId ?? Date.now()}`,
        amount: 0,
        currency: "usd",
        paymentProvider: "revenuecat",
        transitionId: `trial_${customerInfo?.originalAppUserId ?? Date.now()}`,
        startDate: now.toISOString(),
        endDate: trialEnd.toISOString(),
        membershipPlanId: "7_days_trial",
      };

      await createPayment(paymentPayload).unwrap();
      console.log("monthly",paymentPayload);

      Toast.show({
        type: "success",
        position: "top",
        text1: "Free Trial Started!",
        text2: "You have 7 days of free access.",
        visibilityTime: 3000,
        autoHide: true,
      });

      setTimeout(() => {
        router.push("Currency");
      }, 1500);
    } catch (error) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Trial Failed",
        text2: error.message || "Could not start free trial.",
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setProcessingPlan(null);
    }
  };

  const restorePurchases = async () => {
    try {
      setProcessingPlan("restore");

      const customerInfo = await Purchases.restorePurchases();

      const verification = verifySubscription(customerInfo);

      if (verification.isValid) {
        setCustomerInfo(customerInfo);
        Toast.show({
          type: "success",
          position: "top",
          text1: "Success",
          text2: "Purchases restored successfully!",
          visibilityTime: 3000,
          autoHide: true,
        });
      } else {
        Toast.show({
          type: "info",
          position: "top",
          text1: "No Purchases Found",
          text2: "No active subscriptions to restore.",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Restore Failed",
        text2: "Could not restore purchases.",
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setProcessingPlan(null);
    }
  };

  const hasPremiumAccess = () =>
    customerInfo?.entitlements.active["premium"] !== undefined;
  const hasStandardAccess = () =>
    customerInfo?.entitlements.active["standard"] !== undefined;
  const hasAnyAccess = () => hasPremiumAccess() || hasStandardAccess();
  const getActiveAccessLevel = () => {
    if (hasPremiumAccess()) return "Premium";
    if (hasStandardAccess()) return "Standard";
    return null;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1B9E6C" />
        <Text style={styles.loadingText}>Loading subscription plans...</Text>
      </View>
    );
  }

  const activeAccessLevel = getActiveAccessLevel();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Choose Your Plan</Text>

      {/* Active subscription banner */}
      {hasAnyAccess() && (
        <View
          style={[
            styles.activeSubscriptionBanner,
            activeAccessLevel === "Premium"
              ? styles.premiumBanner
              : styles.standardBanner,
          ]}
        >
          <Text style={styles.activeSubscriptionText}>
            ✅ You have {activeAccessLevel} Access
          </Text>
          {customerInfo.activeSubscriptions.length > 0 && (
            <Text style={styles.activeSubscriptionSubtext}>
              Active Plan: {customerInfo.activeSubscriptions.join(", ")}
            </Text>
          )}
          {customerInfo.entitlements.active[
            activeAccessLevel.toLowerCase()
          ] && (
            <Text style={styles.activeSubscriptionSubtext}>
              Expires:{" "}
              {new Date(
                customerInfo.entitlements.active[
                  activeAccessLevel.toLowerCase()
                ].expirationDate,
              ).toLocaleDateString()}
            </Text>
          )}
        </View>
      )}

      <View style={styles.planContainer}>
        {/* ✅ Free Trial Card — 7 Days */}
        <View style={styles.planCard}>
          <View style={[styles.badge, styles.trialBadge]}>
            <Text style={styles.badgeText}>FREE</Text>
          </View>

          <View style={styles.nameSection}>
            <Text style={styles.planName}>7-Day Free Trial</Text>
            <View style={[styles.divider, styles.trialDivider]} />
          </View>

          <Text style={[styles.planDuration, styles.trialText]}>$0.00</Text>
          <Text style={styles.planPeriod}>for 7 days</Text>

          <Text style={styles.planDescription}>
            Try all features free for 7 days. No charges during trial.
          </Text>

          <TouchableOpacity
            style={[
              styles.button,
              styles.trialButton,
              processingPlan !== null && styles.buttonDisabled,
            ]}
            onPress={handleFreeTrial}
            disabled={processingPlan !== null}
          >
            {processingPlan === "trial" ? (
              <View style={styles.buttonLoadingContainer}>
                <ActivityIndicator size="small" color="#fff" />
                <Text style={[styles.buttonText, { marginLeft: 8 }]}>
                  Starting...
                </Text>
              </View>
            ) : (
              <Text style={styles.buttonText}>Start Free Trial</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Monthly Plan */}
        {offerings?.all?.Monthly?.monthly && (
          <View style={styles.planCard}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>STANDARD</Text>
            </View>

            <View style={styles.nameSection}>
              <Text style={styles.planName}>Monthly Plan</Text>
              <View style={styles.divider} />
            </View>

            <Text style={styles.planDuration}>
              {offerings.all.Monthly.monthly.product.priceString}
            </Text>
            <Text style={styles.planPeriod}>per month</Text>

            <Text style={styles.planDescription}>
              {offerings.all.Monthly.monthly.product.title}
            </Text>

            <TouchableOpacity
              style={[
                styles.button,
                processingPlan !== null && styles.buttonDisabled,
              ]}
              onPress={() => handlePurchase("monthly")}
              disabled={processingPlan !== null}
            >
              {processingPlan === "monthly" ? (
                <View style={styles.buttonLoadingContainer}>
                  <ActivityIndicator size="small" color="#fff" />
                  <Text style={[styles.buttonText, { marginLeft: 8 }]}>
                    Processing...
                  </Text>
                </View>
              ) : (
                <Text style={styles.buttonText}>
                  {hasStandardAccess() ? "Current Plan" : "Subscribe Monthly"}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* Yearly Plan */}
        {offerings?.all?.Yearly?.annual && (
          <View style={[styles.planCard, styles.premiumCard]}>
            <View style={[styles.badge, styles.premiumBadge]}>
              <Text style={styles.badgeText}>PREMIUM</Text>
            </View>

            <View style={styles.nameSection}>
              <Text style={styles.planName}>Yearly Plan</Text>
              <View style={[styles.divider, styles.premiumDivider]} />
            </View>

            <Text style={[styles.planDuration, styles.premiumText]}>
              {offerings.all.Yearly.annual.product.priceString}
            </Text>
            <Text style={styles.planPeriod}>per year</Text>

            {offerings.all.Yearly.annual.product.pricePerMonthString && (
              <Text style={styles.planSavings}>
                Only {offerings.all.Yearly.annual.product.pricePerMonthString}{" "}
                /month
              </Text>
            )}

            <Text style={styles.planDescription}>
              {offerings.all.Yearly.annual.product.title}
            </Text>

            <TouchableOpacity
              style={[
                styles.button,
                styles.premiumButton,
                processingPlan !== null && styles.buttonDisabled,
              ]}
              onPress={() => handlePurchase("yearly")}
              disabled={processingPlan !== null}
            >
              {processingPlan === "yearly" ? (
                <View style={styles.buttonLoadingContainer}>
                  <ActivityIndicator size="small" color="#fff" />
                  <Text style={[styles.buttonText, { marginLeft: 8 }]}>
                    Processing...
                  </Text>
                </View>
              ) : (
                <Text style={styles.buttonText}>
                  {hasPremiumAccess() ? "Current Plan" : "Subscribe Yearly"}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Restore Purchases */}
      <TouchableOpacity
        style={styles.restoreButton}
        onPress={restorePurchases}
        disabled={processingPlan !== null}
      >
        {processingPlan === "restore" ? (
          <ActivityIndicator size="small" color="#1B9E6C" />
        ) : (
          <Text style={styles.restoreButtonText}>Restore Purchases</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  activeSubscriptionBanner: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  standardBanner: {
    backgroundColor: "#E8F5E9",
  },
  premiumBanner: {
    backgroundColor: "#FFF4E6",
  },
  activeSubscriptionText: {
    color: "#1B9E6C",
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
  },
  activeSubscriptionSubtext: {
    color: "#1B9E6C",
    fontSize: 12,
    marginTop: 2,
  },
  planContainer: {
    gap: 16,
  },
  planCard: {
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    position: "relative",
  },
  premiumCard: {
    borderWidth: 2,
    borderColor: "#FF9800",
  },
  badge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#1B9E6C",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  premiumBadge: {
    backgroundColor: "#FF9800",
  },
  trialBadge: {
    backgroundColor: "#4A90D9",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  nameSection: {
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
    marginTop: 12,
  },
  planName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  divider: {
    height: 2,
    width: 100,
    backgroundColor: "#1B9E6C",
    marginTop: 4,
    borderRadius: 2,
  },
  premiumDivider: {
    backgroundColor: "#FF9800",
  },
  trialDivider: {
    backgroundColor: "#4A90D9",
  },
  planDuration: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1B9E6C",
    marginBottom: 4,
  },
  premiumText: {
    color: "#FF9800",
  },
  trialText: {
    color: "#4A90D9",
  },
  planPeriod: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  planSavings: {
    fontSize: 14,
    color: "#FF9800",
    fontWeight: "600",
    marginBottom: 8,
  },
  planDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1B9E6C",
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 12,
    width: "100%",
    alignItems: "center",
    minHeight: 50,
    justifyContent: "center",
  },
  premiumButton: {
    backgroundColor: "#FF9800",
  },
  trialButton: {
    backgroundColor: "#4A90D9",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonLoadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  restoreButton: {
    marginTop: 24,
    marginBottom: 40,
    paddingVertical: 12,
    alignItems: "center",
  },
  restoreButtonText: {
    color: "#1B9E6C",
    fontSize: 14,
    fontWeight: "600",
  },
});
