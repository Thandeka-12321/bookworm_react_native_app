import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import useRouter
import COLORS from "../../assets/colors";

import styles from "../../assets/styles/signup.styles";
import { useAuthStore } from "../../store/authStore";

export default function Signup() {
  const router = useRouter(); // Initialize router
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const clearFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const { isLoading, register } = useAuthStore();
  const handleSignUp = async () => {
    let hasError = false;
    const newErrors = { username: "", email: "", password: "" };

    if (!username.trim()) {
      newErrors.username = "Username is required.";
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
      hasError = true;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    try {
      const result = await register(username, email, password);

      if (!result.success) {
        Alert.alert("Error", result.error || "An unexpected error occurred.");
      } else {
        Alert.alert(
          "Info",
          `Successfully signed up \nResult: ${JSON.stringify(result)}`
        );
        clearFields();
      }
    } catch (error) {
      Alert.alert(
        "Network Error",
        "Please check your internet connection and try again."
      );
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            {/* HEADER */}
            <View style={styles.headerContainer}>
              <View style={styles.logoTitleContainer}>
                <View style={styles.topIllustration}></View>
                <Text style={[styles.title, { textAlign: "center" }]}>
                  Book Worm🐛
                </Text>
              </View>
              <Text style={styles.subtitle}>Share your favorite reads</Text>
            </View>
            {/* FORM */}
            <View style={styles.formContainer}>
              {/* Username Input */}
              <View style={styles.inputGroup}>
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your username"
                  placeholderTextColor={COLORS.placeholderText}
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </View>
              {errors.username ? (
                <Text style={styles.errorText}>{errors.username}</Text>
              ) : null}

              {/* Email Input */}
              <View style={styles.inputGroup}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor={COLORS.placeholderText}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              {errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}

              {/* Password Input */}
              <View style={styles.inputGroup}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.placeholderText}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              </View>
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}

              {/* Signup Button */}
              <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="fff" />
                ) : (
                  <Text style={styles.buttonText}>Sign Up</Text>
                )}
              </TouchableOpacity>

              {/* FOOTER */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  Already have an account?{" "}
                  <Text
                    style={[styles.link, { color: COLORS.link }]}
                    onPress={() => router.back()} // Use router.back() to navigate back
                  >
                    Login
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}
