import { StyleSheet, Text, View } from "react-native";
import { VrProgram } from "./src/components/icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <VrProgram color={"red"} width={256} height={256} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
