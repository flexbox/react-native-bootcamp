import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Checkbox, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { FormInput } from "../components/FromInput";
import { useAuthentication } from "../context/Authentication";
import { Routes } from "../navigation/Routes";

import { Header } from "~/components/Header";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation<any>();
  const { setUser } = useAuthentication();
  function handleLogin() {
    setUser(true);
  }

  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }

  function toggleSecureIcon() {
    setChecked(!checked);
  }

  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Header title="SpaceCraft" />
      <View style={styles.content}>
        <FormInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          returnKeyType="next"
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <FormInput
          label="Password"
          value={password}
          secureTextEntry={!checked}
          onChangeText={(value) => setPassword(value)}
          autoComplete="password"
        />
        <Checkbox.Item
          label="Show Password"
          onPress={toggleSecureIcon}
          status={checked ? "checked" : "unchecked"}
          labelStyle={{ textAlign: "left" }}
          style={{
            paddingVertical: 0,
            paddingHorizontal: 0,
          }}
          position="leading"
          mode="android"
        />
        <Button
          onPress={handleLogin}
          style={styles.submitButton}
          mode="contained"
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
