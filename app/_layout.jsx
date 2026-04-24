import { Stack } from "expo-router";
import {
  Pressable,
  StatusBar,
  LogBox,
  Platform,
  UIManager,
  View,
} from "react-native";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import { store } from "../redux/store";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  useEffect(() => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    Purchases.setLogLevel(LOG_LEVEL.ERROR);
    if (Platform.OS === "ios") {
      Purchases.configure({
        apiKey: "appl_ySQmjZPhKyvVPxntosvJVzQfjUi",
      });
    }
    getOfferings();
    getCustomerInfo();
  }, [])

  const defaultHeader = {
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerTintColor: "#000",
    headerBackTitle: "",
    headerBackTitleVisible: false,
    headerBackButtonDisplayMode: "minimal",
  };


  async function getCustomerInfo() {
    const customerInfo = await Purchases.getCustomerInfo();
  }
  async function getOfferings() {
    const offerings = await Purchases.getOfferings()
  }

  const hiddenHeader = { headerShown: false };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Stack
        screenOptions={{
          animation: "slide_from_right",
          animationDuration: 250,
          gestureEnabled: true,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        {/* Initial Screens */}
        <Stack.Screen name="index" options={hiddenHeader} />
        <Stack.Screen name="InitialScreen" options={hiddenHeader} />
        <Stack.Screen name="SecondScreen" options={hiddenHeader} />
        <Stack.Screen name="LoginScreen" options={hiddenHeader} />
        <Stack.Screen name="SignUpScreen" options={hiddenHeader} />
        <Stack.Screen name="ForgerPassword" options={hiddenHeader} />
        <Stack.Screen name="AccountVerification" options={hiddenHeader} />
        <Stack.Screen name="Otp" options={hiddenHeader} />
        <Stack.Screen name="NewPassword" options={hiddenHeader} />

        {/* Tabs */}
        <Stack.Screen name="(tabs)" options={hiddenHeader} />

        <Stack.Screen name="IncrementDecrementAmount" options={hiddenHeader} />

        {/* Main Screens */}
        <Stack.Screen
          name="Subscriptions"
          options={{
            ...defaultHeader,
            title: "Subscription Plans",
            headerBackVisible: false,
            headerTitleStyle: { fontWeight: "700" },
          }}
        />

        <Stack.Screen
          name="AccountInformation"
          options={{
            ...defaultHeader,
            title: "Account Information",
            headerTitleStyle: { fontWeight: "700" },
          }}
        />

        <Stack.Screen
          name="Currency"
          options={{
            ...defaultHeader,
            title: "Currency",
            headerBackVisible: false,
            headerTitleStyle: { fontWeight: "700" },
          }}
        />

        {/* Policies */}
        <Stack.Screen
          name="TermsAndPolicies"
          options={{
            ...defaultHeader,
            title: "Terms & Policies",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />

        <Stack.Screen
          name="PrivacyPolicy"
          options={{
            ...defaultHeader,
            title: "Privacy Policy",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />

        {/* Categories */}
        <Stack.Screen
          name="ExpenseCategories"
          options={({ navigation }) => ({
            ...defaultHeader,
            title: "Expense Categories",
            headerBackVisible: false,
            headerTitleStyle: { fontWeight: "600" },
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
                <View style={{ paddingHorizontal: 4 }}>
                  <Ionicons name="chevron-back" size={26} color="#000" />
                </View>
              </Pressable>
            ),
          })}
        />

        <Stack.Screen
          name="IncomeCategories"
          options={({ navigation }) => ({
            ...defaultHeader,
            title: "Income Categories",
            headerBackVisible: false,
            headerTitleStyle: { fontWeight: "600" },
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
                <View style={{ paddingHorizontal: 4 }}>
                  <Ionicons name="chevron-back" size={26} color="#000" />
                </View>
              </Pressable>
            ),
          })}
        />
      </Stack>

      <Toast />
    </Provider>
  );
}
