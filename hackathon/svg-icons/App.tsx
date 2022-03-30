import { StyleSheet, Text, View } from "react-native";
import { RoboticHand, VrProgram } from "./src/components/icons";

export default function App() {
  return (
    <View style={styles.container}>
      <VrProgram color={"red"} />
      <RoboticHand color={"blue"} />
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
