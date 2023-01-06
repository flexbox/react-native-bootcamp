import { makeTheme } from "dripsy";

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

export const theme = makeTheme({
  colors: {
    $text: palette.black,
    $background: palette.white,
    $primary: palette.blueLight,
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 12,
    $4: 16,
    $5: 20,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: "400",
    heading: "700",
    bold: "700",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  text: {
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
