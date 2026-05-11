// app/SplashScreenComponent.js
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { loadTokenFromStorage } from "../redux/slices/authSlice";
import { saveApiSuccess } from "../redux/slices/messageSlice";
import { getToken } from "../utils/secureStore";
import { useLazyGetMessageWithTotalTransactionQuery } from "../redux/services/api"; // ✅ same as LoginScreen

SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [triggerGetMessages] = useLazyGetMessageWithTotalTransactionQuery(); // ✅ same as LoginScreen

  useEffect(() => {
    const init = async () => {
      try {
        const storedToken = await getToken();

        if (storedToken) {
          dispatch(loadTokenFromStorage(storedToken));

          // ✅ exact same logic as LoginScreen's runAnotherAsyncFunction
          try {
            const result = await triggerGetMessages().unwrap();
            dispatch(saveApiSuccess(result.success));
          } catch (error) {
            dispatch(saveApiSuccess(null));
          }
        } else {
          dispatch(saveApiSuccess(null));
        }

        await SplashScreen.hideAsync();
        setTimeout(() => {
          if (storedToken) {
            router.replace("/(tabs)");
          } else {
            router.replace("/InitialScreen");
          }
        }, 100);

      } catch (err) {
        dispatch(saveApiSuccess(null));
        await SplashScreen.hideAsync();
        setTimeout(() => {
          router.replace("/InitialScreen");
        }, 100);
      }
    };

    init();
  }, []);

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