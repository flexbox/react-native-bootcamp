import { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Checkbox, Text, useTheme } from "react-native-paper";

import { FormInput } from "@/components/FormInput";
import { Header } from "@/components/Header";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const theme = useTheme();

  function handleLogin() {
    // TODO: implement login logic
    Alert.alert("Login pressed!");
  }

  function navigateToTerms() {
    // TODO: implement navigation to Terms screen
    Alert.alert("Navigate to Terms");
  }

  function toggleSecureIcon() {
    setChecked(!checked);
  }

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Header title="SpaceCraft - Expo Router" />
      <View style={styles.content}>
        <FormInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          label="Email"
          onChangeText={(value) => setEmail(value)}
          returnKeyType="next"
          textContentType="emailAddress"
          value={email}
        />
        <FormInput
          autoComplete="password"
          label="Password"
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={!checked}
          value={password}
        />
        <Checkbox.Item
          label="Show Password"
          labelStyle={{ textAlign: "left" }}
          mode="android"
          onPress={toggleSecureIcon}
          position="leading"
          status={checked ? "checked" : "unchecked"}
          style={{
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.submitButton}
        >
          Login
        </Button>
        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  submitButton: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
  tocText: {
    color: "#9CA3AF",
    fontSize: 14,
    textAlign: "center",
  },
});
