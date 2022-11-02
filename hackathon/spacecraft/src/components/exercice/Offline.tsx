import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
  // Add `useIsConnected()` hook

  return (
    <View>
      <Text>
        {/* Check `isConnected` status and render a message with `ActivityIndicator` */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#FEE2E2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: "#991B1B",
  },
});
