import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Offline } from "~/components/Offline";

interface ScreenContainerProps {
  title: string;
  children?: ReactNode;
  withSeparatorFooter?: boolean;
  withScrollView?: boolean;
  withGoBack?: boolean;
  accessoryFooter?: ReactNode;
}

const ScreenContainerTitle = ({
  title,
  withGoBack,
}: {
  title: string;
  withGoBack: boolean;
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {withGoBack && (
        <IconButton
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        />
      )}
      <Text
        variant="headlineMedium"
        style={[styles.headerText, { paddingHorizontal: withGoBack ? 0 : 24 }]}
      >
        {title}
      </Text>
    </View>
  );
};

export const ScreenContainer = ({
  title,
  children,
  withSeparatorFooter = false,
  withScrollView = false,
  withGoBack = false,
  accessoryFooter,
}: ScreenContainerProps) => {
  const theme = useTheme();

  if (withScrollView) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <ScreenContainerTitle
          title={title}
          withGoBack={withGoBack}
        />
        {children}
        <Offline />
        {withSeparatorFooter && <View style={styles.footer} />}
      </ScrollView>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScreenContainerTitle
        title={title}
        withGoBack={withGoBack}
      />
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
    marginTop: 36,
    paddingTop: 24,
  },
  footer: {
    height: 256,
  },
  headerText: {
    fontWeight: "bold",
    paddingVertical: 6,
  },
});
