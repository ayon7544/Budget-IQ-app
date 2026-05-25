import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../Constants/Colors";
import { loadTokenFromStorage } from "../redux/slices/authSlice";
import { getToken } from "../utils/secureStore";
import OnboardingArt from "../assets/images/new.svg";

const InitialScreen = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const onboardingWidth = Math.min(width - 32, 700);
  const onboardingHeight = Math.round((onboardingWidth * 370) / 242);

  useEffect(() => {
    const loadStoredToken = async () => {
      const storedToken = await getToken();

      if (storedToken) {
        dispatch(loadTokenFromStorage(storedToken));
        setToken(storedToken);
      }
    };

    loadStoredToken();
  }, [dispatch]);

  const handleNext = async () => {
    const storedToken = token ?? (await getToken());

    if (storedToken) {
      dispatch(loadTokenFromStorage(storedToken));
      router.replace("/(tabs)");
      return;
    }

    router.replace("/LoginScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent" // Makes the status bar see-through
        barStyle="dark-content" // Dark icons/text for visibility
        translucent={true} // Lets content show behind the bar
      />

      <View style={styles.imageWrap}>
        <OnboardingArt
          width={onboardingWidth}
          height={onboardingHeight}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrap: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "100%",
    maxWidth: 420,
    marginTop: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
