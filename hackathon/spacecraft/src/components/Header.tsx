import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <Text
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
    paddingTop: Constants.statusBarHeight,
  },
  headerText: {
    fontWeight: "800",
    textTransform: "uppercase",
  },
});
