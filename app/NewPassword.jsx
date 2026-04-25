import { Ionicons } from "@expo/vector-icons"; // ✅ make sure to install expo/vector-icons
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackButton from "../Components/UI/BackButton";
import { Colors } from "../Constants/Colors";
import { useResetPasswordMutation } from "../redux/services/api";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation();
  const { email, tokenCode } = useLocalSearchParams();

  const handleNext = async () => {
    if (!newPassword) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Password cannot be empty",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Passwords do not match",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword({
        email,
        tokenCode,
        newPassword,
      }).unwrap();

      router.replace("/LoginScreen");
    } catch (e) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: e?.data?.message || "Something went wrong",
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
          <Text style={styles.title}>New Password</Text>
          <Text style={styles.subTitle}>Please enter your new password</Text>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#888"
                secureTextEntry={!showPassword}
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={24}
                  color={Colors.primary}
                />
              </Pressable>
            </View>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#888"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye" : "eye-off"}
                  size={24}
                  color={Colors.primary}
                />
              </Pressable>
            </View>
          </View>

          {/* Update Button */}
          <TouchableOpacity
            style={[
              styles.verifyButton,
              (isLoading || !newPassword) && { opacity: 0.6 },
            ]}
            onPress={handleNext}
            disabled={isLoading || !newPassword}
          >
            <Text style={styles.verifyText}>
              {isLoading ? "Updating..." : "Update"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;

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
    marginTop: 20,
    textAlign: "center",
  },
  subTitle: {
    marginVertical: 15,
    fontSize: 16,
    textAlign: "center",
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
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    flex: 1,
    height: 45,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    paddingRight: 45, // make room for eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 5,
    width: "100%",
    marginTop: "10%",
  },
  verifyText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
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
