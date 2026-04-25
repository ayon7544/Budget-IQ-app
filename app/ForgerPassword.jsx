import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Colors } from "../Constants/Colors";
import { useForgetPasswordMutation } from "../redux/services/api";
import BackButton from "../Components/UI/BackButton";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const [forgetPassword] = useForgetPasswordMutation();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const validateEmail = (text) => {
    setEmail(text);
    // no UI errors, just updates state
  };

  const handleNext = async () => {
    if (!isEmailValid) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Validation Error",
        text2: "Please enter a valid email address.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await forgetPassword({ email }).unwrap();
      router.push({
        pathname: "/Otp",
        params: { email },
      });
    } catch (err) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: err?.data?.message || "Something went wrong. Please try again.",
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
      >
        <BackButton style={styles.backButton} />
        <View style={styles.content}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subTitle}>
            To reset your password, Please enter the email address that is
            associated with the account. You’ll get the link in your e-mail.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="consultme@gmail.com"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={validateEmail}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={[
              styles.verifyButton,
              (!isEmailValid || isLoading) && { opacity: 0.6 },
            ]}
            onPress={handleNext}
            disabled={!isEmailValid || isLoading}
          >
            <Text style={styles.verifyText}>
              {isLoading ? "Sending..." : "Send"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 20,
    paddingTop: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center", // ✅ correct
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,

    marginVertical: 15,
  },

  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 5,
    fontWeight: "500",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 5,
    width: "100%",
  },
  verifyText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    marginTop: 10,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24
  },
});
