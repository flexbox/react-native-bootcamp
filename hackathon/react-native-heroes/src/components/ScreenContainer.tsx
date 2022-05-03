import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors, Headline } from "react-native-paper";

import { Box } from "~/components/Box";
import theme from "~/theme/theme";
import { AddYourCard } from "~/components/AddYourCard";

type Props = {
  children: React.ReactNode;
};

export const ScreenContainer = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Box px="m">
        <Headline style={styles.text}>React Native Heroes</Headline>
      </Box>
      <AddYourCard />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: theme.spacing.s,
  },
  text: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: theme.spacing.m,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
