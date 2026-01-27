import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import {
  useGetAllMemberShipPlanQuery,
  useGetMembershipMutation,
  useLazyGetMessageWithTotalTransactionQuery,
} from "../redux/services/api";
import { saveApiSuccess } from "../redux/slices/messageSlice";

const Subscriptions = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data: allPlans, isLoading: plansLoading } =
    useGetAllMemberShipPlanQuery();
  const [getMembership, { isLoading: membershipLoading }] =
    useGetMembershipMutation();

  const [triggerGetMessages, { data }] =
    useLazyGetMessageWithTotalTransactionQuery();
  const [textWidths, setTextWidths] = useState({});
  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const [processingPlan, setProcessingPlan] = useState(null);

  const navigateWithCallback = (callback, delay = 1000) => {
    const interval = setInterval(() => {
      const ready = callback();
      if (ready) {
        clearInterval(interval);
        router.push("Currency");
      }
    }, delay);
  };

  const handleLayout = (name, width) => {
    setTextWidths((prev) => ({ ...prev, [name]: width }));
  };

  const handleSubscription = async (plan) => {
    if (processingPlan) return;
    setProcessingPlan(plan.name);

    try {
      if (!allPlans?.result || allPlans.result.length === 0) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: "No membership plans available. Please try again later.",
          visibilityTime: 3000,
          autoHide: true,
        });
        return;
      }

      const matchedPlan = allPlans.result.find(
        (p) => p.name.toLowerCase() === plan.name.toLowerCase(),
      );

      if (!matchedPlan) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: `The plan "${plan.name}" was not found. Please try again.`,
          visibilityTime: 3000,
          autoHide: true,
        });

        return;
      }

      const selectedPlanId = matchedPlan._id;
      const response = await getMembership(selectedPlanId).unwrap();

      if (!response || !response.result) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: "Failed to fetch membership details. Please try again.",
          visibilityTime: 3000,
          autoHide: true,
        });

        return;
      }

      await runAnotherAsyncFunction();

      if (plan.name.toLowerCase() === "free-trial") {
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Success",
          text2: `Subscribed to the ${plan.name} plan successfully!`,
          visibilityTime: 3000,
          autoHide: true,
        });

        setTimeout(() => {
          navigateWithCallback(() => true, 1000); // Navigate after a short delay
        }, 1000);
      } else {
        const checkoutUrl = response.result?.url;
        if (checkoutUrl) {
          setCheckoutUrl(checkoutUrl);
        } else {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "Error",
            text2: "Checkout URL not found. Please try again.",
            visibilityTime: 3000,
            autoHide: true,
          });
        }
      }
    } catch (err) {
      const errorMessage =
        err?.data?.message ||
        err?.message ||
        "An error occurred while processing your subscription. Please try again.";
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Subscription Error",
        text2: errorMessage,
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setTimeout(() => {
        setProcessingPlan(null);
      }, 1000);
    }
  };

  const runAnotherAsyncFunction = async () => {
    try {
      const result = await triggerGetMessages().unwrap();
      dispatch(saveApiSuccess(result.success));
    } catch (error) { }
  };

  const handleBackFromWebView = () => {
    setCheckoutUrl(null);
    setProcessingPlan(null);
  };

  const handlePaymentSuccess = () => {
    setCheckoutUrl(null);
    setProcessingPlan(null);
    setLoading(true);
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Payment Successful",
      text2: "Your subscription has been activated successfully!",
      visibilityTime: 3000,
      autoHide: true,
    });

    setTimeout(() => {
      navigateWithCallback(() => true, 1000); // Navigate after a short delay
    }, 1000);
  };

  const handlePaymentCancel = () => {
    setCheckoutUrl(null);
    setProcessingPlan(null);
    Toast.show({
      type: "error",
      position: "bottom",
      text1: "Payment Canceled",
      text2: "Your payment has been canceled. You can try again anytime.",
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  if (checkoutUrl) {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1B9E6C" />
          <Text style={styles.loadingText}>
            Activating your subscription...
          </Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: checkoutUrl }}
          style={{ flex: 1 }}
          onNavigationStateChange={(navState) => {
            const url = navState.url;
            if (url.includes("/success")) {
              handlePaymentSuccess();
            }
            if (url.includes("/error")) {
              handlePaymentCancel();
            }
          }}
          onError={(error) => handleBackFromWebView()}
        />
      </View>
    );
  }

  if (plansLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1B9E6C" />
        <Text style={styles.loadingText}>Loading subscription plans...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginPrompt}>Already have a subscription?</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/LoginScreen")}
            activeOpacity={0.7}
          >
            <Text style={styles.loginButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>Choose Your Plan</Text>

      <View style={styles.planContainer}>
        {allPlans?.result?.map((plan) => {
          const isProcessing = processingPlan === plan.name;
          const isAnyProcessing = processingPlan !== null;

          return (
            <View key={plan.name} style={styles.planCard}>
              <View style={styles.nameSection}>
                <Text
                  style={styles.planName}
                  onLayout={(event) =>
                    handleLayout(plan.name, event.nativeEvent.layout.width)
                  }
                >
                  {plan.label || plan.name}
                </Text>
                <View
                  style={[
                    styles.divider,
                    { width: textWidths[plan.name] || 0 },
                  ]}
                />
              </View>

              <Text style={styles.planDetails}>
                <Text style={styles.planDuration}>{plan.label}</Text>
              </Text>

              <TouchableOpacity
                style={[
                  styles.button,
                  isAnyProcessing && !isProcessing && styles.buttonDisabled,
                ]}
                onPress={() => handleSubscription(plan)}
                disabled={isAnyProcessing}
              >
                {isProcessing ? (
                  <View style={styles.buttonLoadingContainer}>
                    <ActivityIndicator size="small" color="#fff" />
                    <Text style={[styles.buttonText, { marginLeft: 8 }]}>
                      Processing...
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.buttonText}>
                    {plan.name === "free-trial"
                      ? "Start Free Trial"
                      : "Purchase"}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
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
  },
  planName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  planDuration: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1B9E6C",
    marginBottom: 4,
  },
  planPrice: {
    fontSize: 14,
    color: "#1B9E6C",
    marginBottom: 16,
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
  nameSection: {
    alignItems: "center",
    marginBottom: 12,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#1B9E6C",
    marginTop: 4,
    borderRadius: 2,
  },
  planDetails: {
    padding: 12,
  },
  header: {
    marginBottom: 30,
    marginTop: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Subtle border
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  loginPrompt: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  loginButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#1B9E6C', // Matching your brand color
  },
  loginButtonText: {
    color: '#1B9E6C',
    fontWeight: '700',
    fontSize: 14,
  },
});
