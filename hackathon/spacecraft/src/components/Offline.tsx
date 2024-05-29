import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";

import { useNetwork } from "~/context/Network";

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
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
