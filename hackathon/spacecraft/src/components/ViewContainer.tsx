import type { ReactNode } from "react";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Headline } from "react-native-paper";

import { Offline } from "~/components/Offline";

interface ContainerProps {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
}

export const ViewContainer = ({
  title,
  children,
  withFooter = false,
}: ContainerProps) => {
  return (
    <View style={styles.container}>
      <Headline style={styles.headerText}>{title}</Headline>

      {children}

      <Offline />

      {withFooter && <View style={styles.footer} />}
    </View>
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
