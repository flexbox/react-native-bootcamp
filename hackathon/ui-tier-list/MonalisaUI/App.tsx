import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
