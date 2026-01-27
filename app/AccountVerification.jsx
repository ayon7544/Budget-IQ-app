import { useLocalSearchParams, useRouter } from "expo-router";
import { use, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { Colors } from "../Constants/Colors";
import { useVerifyRegistrationMutation } from "../redux/services/api";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice"; //

import { useSignInMutation } from "../redux/services/api";
import { useResentOtpMutation } from "../redux/services/api";
import { KeyboardAvoidingView, Platform } from "react-native";
const AccountVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const { password } = useLocalSearchParams();
  const dispatch = useDispatch(); // ✅ Add this

  const [oTP, { isLoading }] = useVerifyRegistrationMutation();
  const [resentOtp] = useResentOtpMutation();
  const [signIn] = useSignInMutation();
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResendOtp = async () => {
    if (!email) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error",
        text2: "Email is missing. Cannot resend OTP.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    setCountdown(60);
    setIsResendDisabled(true);

    try {
      const response = await resentOtp({ email }).unwrap();
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Success",
        text2: "A new OTP has been sent to your email.",
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (e) {
      const statusCode = e?.status;
      const message = e?.data?.message || "Unable to resend OTP.";

      if (statusCode === 429) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Too Many Requests",
          text2: "Please wait before requesting again.",
          visibilityTime: 3000,
          autoHide: true,
        });
      } else if (statusCode === 500) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Server Error",
          text2: "Please try again later.",
          visibilityTime: 3000,
          autoHide: true,
        });
      } else {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: message,
          visibilityTime: 3000,
          autoHide: true,
        });
      }

      // ✅ Allow user to retry after failure
      setIsResendDisabled(false);
    }
  };

  // Handle OTP verification and sign in
  const handleVerify = async () => {
    if (otp.join("").length < 6) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Invalid OTP",
        text2: "Please enter the complete 6-digit code.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    if (!email || !password) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Missing Data",
        text2: "Email or password is missing. Please restart the process.",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    try {
      const verifyResponse = await oTP({
        email: email,
        tokenCode: otp.join(""),
      }).unwrap();
      // ✅ 3. Proceed to Sign-in
      try {
        const signInResponse = await signIn({
          email: email,
          password: password,
        }).unwrap();
        const token = signInResponse?.data?.accessToken;
        if (token) {
          dispatch(setToken(token));
          router.replace("/LoginScreen");
        } else {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "Sign-in Error",
            text2: "Token is missing. Please try again.",
            visibilityTime: 3000,
            autoHide: true,
          });
        }
      } catch (signInError) {
        const statusCode = signInError?.status;
        const message =
          signInError?.data?.message || "Sign-in failed. Please try again.";

        if (statusCode === 401) {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "Authentication Failed",
            text2: "Invalid credentials.",
            visibilityTime: 3000,
            autoHide: true,
          });
        } else if (statusCode === 500) {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "Server Error",
            text2: "Unable to sign in. Try again later.",
            visibilityTime: 3000,
            autoHide: true,
          });
        } else {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "Error",
            text2: message,
            visibilityTime: 3000,
            autoHide: true,
          });
        }
      }
    } catch (err) {
      const statusCode = err?.data?.err?.statusCode || err?.status || 500;
      const message = err?.data?.message || "Failed to verify OTP.";

      Toast.show({
        type: "error",
        position: "bottom",
        text1: "❌ Error", // Add emoji or custom title
        text2: message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Account Verification</Text>
        <Text style={styles.subTitle}>
          To verify you account, please enter the verification code that you
          have received in your email {email}
        </Text>

        <View style={styles.inputContainer}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={otp[index]}
              onChangeText={(text) => handleOtpChange(index, text)}
              onKeyPress={({ nativeEvent: { key } }) =>
                handleKeyPress(index, key)
              }
              selectTextOnFocus
            />
          ))}
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyText}>Send</Text>
        </TouchableOpacity>

        <View style={styles.resendCode}>
          <Text>
            {isResendDisabled
              ? `Resend OTP in ${countdown}s`
              : "Didn't get code?"}
          </Text>

          <TouchableOpacity
            onPress={handleResendOtp}
            disabled={isResendDisabled}
          >
            <Text style={{ color: isResendDisabled ? "gray" : "#1BA26E" }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AccountVerification;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    marginVertical: 20,
    fontSize: 16,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 5,
  },
  input: {
    width: 45,
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },
  countdown: {
    marginBottom: 10,
    color: "gray",
  },
  resendButton: {
    borderRadius: 5,
    marginBottom: 20,
  },
  resendText: {
    color: "white",
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
  resendCode: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
});
