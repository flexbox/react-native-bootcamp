import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import { TITLE_MAX_FONT_SIZE } from "@/theme/typography";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      {/* The title is a single word, so it shrinks to fit instead of breaking mid-word */}
      <Text
        accessibilityRole="header"
        adjustsFontSizeToFit
        maxFontSizeMultiplier={
          TITLE_MAX_FONT_SIZE / theme.fonts.headlineMedium.fontSize
        }
        numberOfLines={1}
        style={[styles.headerText, { color: theme.colors.background }]}
        variant="headlineMedium"
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 256,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
  },
  headerText: {
    fontWeight: "800",
    textTransform: "uppercase",
  },
});
