import { useNetwork } from "@/context/Network";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";

export const Offline = () => {
  const { isConnected } = useNetwork();
  const { colors } = useTheme();

  return (
    <>
      {!isConnected && (
        <View
          style={[styles.container, { backgroundColor: colors.errorContainer }]}
        >
          <Text style={{ color: colors.error }}>
            Offline, reconnection in progress…
          </Text>
          <ActivityIndicator color={colors.error} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    padding: 20,
    position: "absolute",
    top: 55,
    width: "90%",
  },
});
