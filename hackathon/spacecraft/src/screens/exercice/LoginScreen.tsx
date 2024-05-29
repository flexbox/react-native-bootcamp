import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Add a beautifull Login Screen here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
