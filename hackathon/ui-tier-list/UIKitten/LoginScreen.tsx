import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Button, Icon, Input, Text, useTheme } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

export const LoginScreen = (props: Props) => {
  const theme = useTheme();

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderPasswordIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const renderUserIcon = (props) => <Icon {...props} name="person" />;

  return (
    <View>
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: theme["color-primary-default"] },
        ]}
      >
        <SafeAreaView style={{ alignItems: "center" }}>
          <Text category="h3" status="control">
            UIKitten
          </Text>
          <Text category="p1" status="control">
            Sign in to your account
          </Text>
        </SafeAreaView>
      </View>
      <View style={styles.mainContainer}>
        <Input
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          accessoryRight={renderUserIcon}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          textContentType="password"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          secureTextEntry={secureTextEntry}
          accessoryRight={renderPasswordIcon}
        />
        <Button size="giant">Sign In</Button>
        <Button size="giant" appearance="ghost">
          Don't have an account? Create
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    padding: 32,
  },
  mainContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  input: {
    marginBottom: 16,
  },
});
