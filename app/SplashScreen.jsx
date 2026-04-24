// app/SplashScreenComponent.js
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { loadTokenFromStorage } from "../redux/slices/authSlice";
import { getToken } from "../utils/secureStore";

SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const storedToken = await getToken();
        console.log(storedToken)
        if (storedToken) {
          // ✅ User is logged in — load token into Redux
          dispatch(loadTokenFromStorage(storedToken));
        }

        // ✅ Hide splash first
        await SplashScreen.hideAsync();

        // ✅ Navigate after a tick so layout is ready
        setTimeout(() => {
          if (storedToken) {
            // logged in → go to main app
            router.replace("/(tabs)");
          } else {
            // not logged in → go to onboarding
            router.replace("/InitialScreen");
          }
        }, 100);

      } catch (err) {
        // Safety fallback — always navigate no matter what
        await SplashScreen.hideAsync();
        setTimeout(() => {
          router.replace("/InitialScreen");
        }, 100);
      }
    };

    init();
  }, []);   // ✅ runs only once on mount — no dependency array issues

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00C46A" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});