import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colors, Headline } from "react-native-paper";

import { Offline } from "~/components/Offline";

interface ScreenContainerProps {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
}

export const ScreenContainer = ({
  title,
  children,
  withFooter = false,
}: ScreenContainerProps) => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <Headline style={styles.headerText}>{title}</Headline>

      {children}

      <Offline />

      {withFooter && <View style={styles.footer} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: Colors.grey200,
    marginTop: 36,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    paddingBottom: 256,
  },
});
