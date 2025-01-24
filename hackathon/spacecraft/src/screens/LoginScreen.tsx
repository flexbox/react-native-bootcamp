import { Header } from "@/components/Header";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Checkbox, Text, useTheme } from "react-native-paper";

import { FormInput } from "../components/FromInput";
import { useAuthentication } from "../context/Authentication";
import { Routes } from "../navigation/Routes";

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
