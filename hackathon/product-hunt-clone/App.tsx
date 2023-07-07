import { ThemeProvider } from "@aws-amplify/ui-react-native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const theme = {
  tokens: {
    colors: {
      font: {
        primary: "#FACC15",
      },
    },
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>
          Open up App.tsx to start working on your app! Welcom Amplify React
          Native
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
