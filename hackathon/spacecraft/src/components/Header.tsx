import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import Constants from "expo-constants";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: theme.colors.elevation.level5 },
      ]}
    >
      <Text variant="headlineMedium" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 256,
  },
  headerText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
