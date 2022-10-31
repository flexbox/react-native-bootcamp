import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Offline } from "~/components/Offline";

interface ScreenContainerProps {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
  withScrollView?: boolean;
}

export const ScreenContainer = ({
  title,
  children,
  withFooter = false,
  withScrollView = false,
}: ScreenContainerProps) => {
  if (withScrollView) {
    return (
      <ScrollView style={styles.container}>
        <Text variant="headlineMedium" style={styles.headerText}>
          {title}
        </Text>
        {children}
        <Offline />
        {withFooter && <View style={styles.footer} />}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.headerText}>
        {title}
      </Text>
      {children}
      <Offline />
      {withFooter && <View style={styles.footer} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    // backgroundColor: Colors.grey200,
    marginTop: 36,
  },
  headerText: {
    paddingHorizontal: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    paddingBottom: 256,
  },
});
