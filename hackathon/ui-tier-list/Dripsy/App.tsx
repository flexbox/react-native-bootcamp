import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { DripsyProvider } from "dripsy";

import { LoginScreen } from "./LoginScreen";
import { theme } from "./theme";

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <LoginScreen />
        </View>
      </SafeAreaProvider>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
