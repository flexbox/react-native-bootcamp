import type { ReactNode } from "react";

import React from "react";
import { Text } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";

// Import <Offline /> component

interface ScreenContainerProps {
  title: string;
  children?: ReactNode;
  withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({
  children,
  title,
  withSeparatorFooter = false,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled={true}
    >
      {/* <Offline /> */}
      <Text
        variant="headlineMedium"
        style={styles.headerText}
      >
        {title}
      </Text>

      {children}
      {withSeparatorFooter && <View style={styles.footer} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  footer: {
    paddingBottom: 256,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 20,
  },
});
