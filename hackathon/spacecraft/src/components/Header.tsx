import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Constants from "expo-constants";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <Text
        variant="headlineMedium"
        style={[styles.headerText, { color: theme.colors.background }]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 256,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  headerText: {
    fontWeight: "800",
    textTransform: "uppercase",
  },
});
