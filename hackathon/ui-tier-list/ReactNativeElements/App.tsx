import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Input, Text } from "@rneui/themed";

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text h3>ReactNativeElements</Text>
          <Text>Sign in to your account</Text>
        </View>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          rightIcon={{ type: "font-awesome", name: "user" }}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          rightIcon={{ type: "font-awesome", name: "eye" }}
          returnKeyType="done"
        />
        <Button
          title="Sign In"
          size="lg"
          containerStyle={{
            width: "100%",
            marginVertical: 10,
          }}
        />
        <Button title="Don't have an account? Create" type="clear" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    padding: 32,
  },
});
