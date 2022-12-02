import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

interface Props {}

export const LoginScreen = (props: Props) => {
  const theme = useTheme();

  return (
    <View>
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: theme.colors.primary },
        ]}
      >
        <Text
          variant="headlineMedium"
          style={{ color: theme.colors.onPrimary }}
        >
          ReactNativePaper
        </Text>
        <Text variant="bodyMedium" style={{ color: theme.colors.onPrimary }}>
          Sign in to your account
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <TextInput
          mode="outlined"
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          right={<TextInput.Icon icon="face-woman" />}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          right={<TextInput.Icon icon="eye-outline" />}
          returnKeyType="done"
        />
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          Sign In
        </Button>
        <Button mode="text" onPress={() => console.log("Pressed")}>
          Don't have an account? Create
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    paddingVertical: 48,
  },
  mainContainer: {
    paddingHorizontal: 24,
  },
  input: {
    marginBottom: 16,
  },
});
