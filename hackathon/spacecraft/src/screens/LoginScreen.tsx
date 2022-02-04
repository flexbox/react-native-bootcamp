import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Button, Colors, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { FormInput } from "../components/FromInput";
import { Routes } from "../navigation/Routes";
import { useAuthentication } from "../context/Authentication";

import { Header } from "~/components/Header";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(true);

  const navigation = useNavigation();
  const { setUser } = useAuthentication();
  function handleLogin() {
    setUser(true);
  }

  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }

  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }

  return (
    <View>
      <Header title="SpaceCraft" />
      <View style={styles.content}>
        <FormInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <FormInput
          label="Password"
          value={password}
          secureTextEntry={isVisble}
          onChangeText={(value) => setPassword(value)}
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              name={isVisble ? "eye-off" : "eye"}
            />
          }
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
    marginVertical: 32,
    marginHorizontal: 16,
    backgroundColor: Colors.purple500,
  },
  tocText: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.grey500,
  },
});
