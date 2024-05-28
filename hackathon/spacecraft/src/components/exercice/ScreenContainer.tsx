import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

// Import <Offline /> component

interface ScreenContainerProps {
  title: string;
  children?: ReactNode;
  withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({
  title,
  children,
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
