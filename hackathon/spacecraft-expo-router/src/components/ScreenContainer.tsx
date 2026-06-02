import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Offline } from "@/components/Offline";

interface ScreenContainerProps {
  accessoryFooter?: ReactNode;
  children?: ReactNode;
  title: string;
  withScrollView?: boolean;
  withSeparatorFooter?: boolean;
}

const ScreenContainerTitle = ({ title }: { title: string }) => {
  return (
    <View style={{ alignItems: "center", flexDirection: "row" }}>
      <Text
        style={styles.headerText}
        variant="headlineMedium"
      >
        {title}
      </Text>
    </View>
  );
};

export const ScreenContainer = ({
  accessoryFooter,
  children,
  title,
  withScrollView = false,
  withSeparatorFooter = false,
}: ScreenContainerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const containerStyle = [
    styles.container,
    { backgroundColor: theme.colors.background, paddingTop: insets.top },
  ];

  if (withScrollView) {
    return (
      <ScrollView style={containerStyle}>
        <ScreenContainerTitle title={title} />
        {children}
        <Offline />
        {withSeparatorFooter && <View style={styles.footer} />}
      </ScrollView>
    );
  }

  return (
    <View style={containerStyle}>
      <ScreenContainerTitle title={title} />
      {children}
      <Offline />
      {withSeparatorFooter && <View style={styles.footer} />}
      {accessoryFooter && (
        <View style={styles.accessoryFooter}>{accessoryFooter}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accessoryFooter: {
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  container: {
    flex: 1,
  },
  footer: {
    height: 256,
  },
  headerText: {
    fontWeight: "bold",
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
});
