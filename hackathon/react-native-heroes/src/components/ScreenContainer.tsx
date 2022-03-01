import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors, Headline } from "react-native-paper";

import { Box } from "~/components/Box";
import theme from "~/theme/theme";

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
  },
});
