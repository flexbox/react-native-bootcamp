import type { ReactNode } from "react";

import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";

import { Offline } from "~/components/Offline";

interface ScreenContainerProps {
  accessoryFooter?: ReactNode;
  children?: ReactNode;
  title: string;
  withGoBack?: boolean;
  withScrollView?: boolean;
  withSeparatorFooter?: boolean;
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
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {withGoBack && (
        <IconButton
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        />
      )}
      <Text
        style={[styles.headerText, { paddingHorizontal: withGoBack ? 0 : 24 }]}
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
  withGoBack = false,
  withScrollView = false,
  withSeparatorFooter = false,
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
