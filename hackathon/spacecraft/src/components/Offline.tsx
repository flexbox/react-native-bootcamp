import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
  const isConnected = useIsConnected();

  return (
    <>
      {!isConnected && (
        <View style={styles.container}>
          <Text style={styles.message}>Offline, reconnection in progress…</Text>
          <ActivityIndicator color="#991B1B" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    padding: 20,
    position: "absolute",
    top: 55,
    width: "90%",
  },
  message: {
    color: "#991B1B",
  },
});
