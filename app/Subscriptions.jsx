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

const Subscriptions = () => {
  const [processingPlan, setProcessingPlan] = useState(null);
  const [offerings, setOfferings] = useState(null);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

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
          position: "bottom",
          text1: "Error",
          text2: "Subscription package not found.",
          visibilityTime: 3000,
          autoHide: true,
        });
        return;
      }


      const { customerInfo: purchaseInfo } =
        await Purchases.purchasePackage(rcPackage);


      // Check for active entitlements
      const activePremium = purchaseInfo.entitlements.active["premium"];
      const activeStandard = purchaseInfo.entitlements.active["standard"];

      if (activePremium || activeStandard) {
        const entitlementName = activePremium ? "Premium" : "Standard";
        const entitlement = activePremium || activeStandard;

        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Success",
          text2: `${entitlementName} Access activated!`,
          visibilityTime: 3000,
          autoHide: true,
        });

        // Navigate to next screen
        setTimeout(() => {
          router.push("Currency");
        }, 1500);
      } else {
        // Fallback if entitlements aren't configured properly
        const hasActiveSubscription =
          purchaseInfo.activeSubscriptions.length > 0;

        if (hasActiveSubscription) {
          Toast.show({
            type: "success",
            position: "bottom",
            text1: "Purchase Complete",
            text2: "Subscription active!",
            visibilityTime: 3000,
            autoHide: true,
          });

          setTimeout(() => {
            router.push("Currency");
          }, 1500);
        }
      }
    } catch (error) {
      if (error.userCancelled) {

        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Cancelled",
          text2: "Purchase was cancelled.",
          visibilityTime: 2000,
          autoHide: true,
        });
      } else {
        Toast.show({
          type: "error",
          position: "bottom",
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

  const restorePurchases = async () => {
    try {
      setProcessingPlan("restore");
      const customerInfo = await Purchases.restorePurchases();

      const hasActiveEntitlement =
        Object.keys(customerInfo.entitlements.active).length > 0;
      const hasActiveSubscription = customerInfo.activeSubscriptions.length > 0;

      if (hasActiveEntitlement || hasActiveSubscription) {
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Success",
          text2: "Purchases restored successfully!",
          visibilityTime: 3000,
          autoHide: true,
        });

        setCustomerInfo(customerInfo);
      } else {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "No Purchases Found",
          text2: "No active subscriptions to restore.",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Restore Failed",
        text2: "Could not restore purchases.",
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setProcessingPlan(null);
    }
  };

  // Helper functions to check access levels
  const hasPremiumAccess = () => {
    return customerInfo?.entitlements.active["premium"] !== undefined;
  };

  const hasStandardAccess = () => {
    return customerInfo?.entitlements.active["standard"] !== undefined;
  };

  const hasAnyAccess = () => {
    return hasPremiumAccess() || hasStandardAccess();
  };

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

      {/* Show current subscription status */}
      {hasAnyAccess() && (
        <View
          style={[
            styles.activeSubscriptionBanner,
            hasPremiumAccess() ? styles.premiumBanner : styles.standardBanner,
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
                processingPlan &&
                  processingPlan !== "monthly" &&
                  styles.buttonDisabled,
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

            <Text style={styles.planSavings}>
              Only {offerings.all.Yearly.annual.product.pricePerMonthString}
              /month
            </Text>

            <Text style={styles.planDescription}>
              {offerings.all.Yearly.annual.product.title}
            </Text>

            <TouchableOpacity
              style={[
                styles.button,
                styles.premiumButton,
                processingPlan &&
                  processingPlan !== "yearly" &&
                  styles.buttonDisabled,
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

      {/* Restore Purchases Button */}
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
  planDuration: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1B9E6C",
    marginBottom: 4,
  },
  premiumText: {
    color: "#FF9800",
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
    paddingVertical: 12,
    alignItems: "center",
  },
  restoreButtonText: {
    color: "#1B9E6C",
    fontSize: 14,
    fontWeight: "600",
  },
  debugInfo: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#FFF3CD",
    borderRadius: 8,
    marginBottom: 20,
  },
  debugTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "#856404",
  },
  debugText: {
    fontSize: 12,
    color: "#856404",
    marginTop: 4,
  },
});
