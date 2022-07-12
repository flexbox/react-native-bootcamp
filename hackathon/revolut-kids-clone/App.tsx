import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "./src/components/Button";
import { Row } from "./src/components/Layout";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-sky-400">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Row>
        <Button variant="primary">Log in</Button>
        <Button variant="secondary">Sign up</Button>
      </Row>
    </View>
  );
}
