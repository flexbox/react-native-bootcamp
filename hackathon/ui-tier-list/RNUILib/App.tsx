import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./LoginScreen";

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
