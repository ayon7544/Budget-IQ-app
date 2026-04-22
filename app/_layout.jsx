import { Stack } from "expo-router";
import { StatusBar, LogBox, Platform } from "react-native";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import { store } from "../redux/store";
import { useEffect } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  useEffect(() => {
    Purchases.setLogLevel(LOG_LEVEL.DEBUG);
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
  };


  async function getCustomerInfo() {
    const customerInfo = await Purchases.getCustomerInfo();
    console.log("Customer Info:", JSON.stringify(customerInfo, null, 2));
  }
  async function getOfferings(){
    const offerings = await Purchases.getOfferings()
    if(offerings.current!==null && offerings.current.availablePackages.length!==0){console.log("Offerings",JSON.stringify(offerings,null,2))}
  }

  const hiddenHeader = { headerShown: false };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Stack>
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
          options={{
            ...defaultHeader,
            title: "Expense Categories",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />

        <Stack.Screen
          name="IncomeCategories"
          options={{
            ...defaultHeader,
            title: "Income Categories",
            headerTitleStyle: { fontWeight: "600" },
          }}
        />
      </Stack>

      <Toast />
    </Provider>
  );
}
