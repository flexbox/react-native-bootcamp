import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import { StyleSheet } from "react-native";
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
} from "@ui-kitten/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { LoginScreen } from "./LoginScreen";

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <StatusBar style="auto" />
          <LoginScreen />
        </Layout>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
