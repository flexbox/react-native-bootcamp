import { createTheme } from "@shopify/restyle";
import { Colors } from "react-native-paper";

const theme = createTheme({
  colors: {
    mainBackground: Colors.white,
    cardPrimaryBackground: Colors.purple500,
    activityIndicator: Colors.orange500,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
