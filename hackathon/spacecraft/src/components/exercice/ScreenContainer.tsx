import type { ReactNode } from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

// Import <Offline /> component

interface ScreenContainerProps {
  children?: ReactNode;
  title: string;
  withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({
  children,
  title,
  withSeparatorFooter = false,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
    >
      {/* <Offline /> */}
      <Text
        style={styles.headerText}
        variant="headlineMedium"
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
