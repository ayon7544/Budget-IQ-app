import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { Colors } from "../Constants/Colors";
import {
  useLazyGetMessageWithTotalTransactionQuery,
  useSignInMutation,
} from "../redux/services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { setToken } from "../redux/slices/authSlice";
import { saveApiSuccess } from "../redux/slices/messageSlice";
import { getToken, saveAuthData } from "../utils/secureStore";

const LoginScreen = () => {
  const [triggerGetMessages, { data }] =
    useLazyGetMessageWithTotalTransactionQuery();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (text) => {
    handleChange("email", text);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(regex.test(text));
  };

  const router = useRouter();
  const navigation = useNavigation();
  const [signIn, { isLoading, isError }] = useSignInMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await signIn(formData).unwrap();

      if (response?.data?.accessToken && formData?.email) {
        await saveAuthData(response?.data?.accessToken, formData?.email);
        dispatch(setToken(response?.data?.accessToken));
        console.log(response);
        const token = await getToken();
      }

      await runAnotherAsyncFunction();

      router.replace("/(tabs)");
    } catch (error) {
      const message = error?.data?.message || "Something went wrong";
      Toast.show({
        type: "error",
        position: "top",
        text1: "Login Failed",
        text2: message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const runAnotherAsyncFunction = async () => {
    try {
      const result = await triggerGetMessages().unwrap();
      dispatch(saveApiSuccess(result.success));
    } catch (error) {
      dispatch(saveApiSuccess(null));
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid
        >
          <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>

            <Image
              source={require("../assets/images/welcome.png")}
              style={styles.logo}
            />
            <Text style={styles.logoText}>BUDGET{"\n"}IQ</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
              value={formData.email}
              style={styles.input}
              placeholder="consultme@gmail.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={validateEmail}
            />

            <Text style={styles.label}>Password</Text>
            <View style={{ position: "relative" }}>
              <TextInput
                value={formData.password}
                style={[styles.input, { paddingRight: 40 }]}
                placeholder="********"
                placeholderTextColor="#888"
                secureTextEntry={!showPassword}
                onChangeText={(text) => handleChange("password", text)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: 10, top: 12 }}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={22}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.forgot}
              onPress={() => navigation.navigate("ForgerPassword")}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleLogin()}
              style={[
                styles.loginButton,
                (isLoading ||
                  !isEmailValid ||
                  !formData.email.trim() ||
                  !formData.password.trim()) && { opacity: 0.6 },
              ]}
              disabled={
                isLoading ||
                !isEmailValid ||
                !formData.email.trim() ||
                !formData.password.trim()
              }
            >
              <Text style={styles.loginButtonText}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/SignUpScreen")}>
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 8,
  },
  logoText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#00794F",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#00794F",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00794F",
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
    color: "#333",
  },
  forgot: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#00794F",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#00794F",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#00794F",
    fontWeight: "600",
  },
});
