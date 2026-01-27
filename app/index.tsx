import React from "react";
import { StatusBar } from "react-native";
import SplashScreenComponent from "./SplashScreen";
import Toast from "react-native-toast-message"; // Import Toast

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#ffffff" // Pure white background
        barStyle="light-content" // Dark icons/text (for white bg)
        translucent={false} // Solid (not overlaying content)
      />
      <SplashScreenComponent />

      {/* Toast component to render the toast messages */}
      <Toast />
    </>
  );
}
