import { View, StyleSheet } from "react-native";
import React from "react";
import { Colors, Headline } from "react-native-paper";
import Constants from "expo-constants";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Headline style={styles.headerText}>{title}</Headline>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 256,
    backgroundColor: Colors.purple500,
  },
  headerText: {
    color: Colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
