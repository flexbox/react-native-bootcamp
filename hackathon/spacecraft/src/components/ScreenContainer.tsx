import { useNavigation } from "@react-navigation/native";
import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";

import { Offline } from "~/components/Offline";

interface ScreenContainerProps {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
  withScrollView?: boolean;
  withGoBack?: boolean;
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
        <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
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
  withFooter = false,
  withScrollView = false,
  withGoBack = false,
}: ScreenContainerProps) => {
  if (withScrollView) {
    return (
      <ScrollView style={styles.container}>
        <ScreenContainerTitle title={title} withGoBack={withGoBack} />
        {children}
        <Offline />
        {withFooter && <View style={styles.footer} />}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenContainerTitle title={title} withGoBack={withGoBack} />
      {children}
      <Offline />
      {withFooter && <View style={styles.footer} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    marginTop: 36,
  },
  headerText: {
    fontWeight: "bold",
    paddingVertical: 6,
  },
  footer: {
    height: 256,
  },
});
