import { createTheme } from "@shopify/restyle";

const palette = {
  blueLight: "#93C5FD",
  bluePrimary: "#3B82F6",
  blueDark: "#1D4ED8",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  pink: "#EC4899",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.bluePrimary,
    text: palette.black,
    textOnDark: palette.white,
    pink: palette.pink,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
  },
  borderColors: {
    neutral: palette.black,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    h1: {
      fontWeight: "bold",
      fontSize: 34,
      lineHeight: 42.5,
      color: "text",
    },
    h2: {
      fontWeight: "600",
      fontSize: 28,
      lineHeight: 36,
      color: "text",
    },
    p1: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    defaults: {
      fontSize: 16,
      lineHeight: 24,
      color: "pink",
    },
  },
});

export type Theme = typeof theme;
// eslint-disable-next-line import/no-default-export
export default theme;
