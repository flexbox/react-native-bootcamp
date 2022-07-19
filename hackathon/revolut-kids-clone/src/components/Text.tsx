import { Text as RNText } from "react-native";
import React from "react";

type Props = {
  variant?: "h1" | "h2" | "s1" | "p1" | "p2";
  style?: string;
};

export const Text = ({ variant, style, children }: Props) => {
  let textStyle = "text-base font-medium";
  let textSize = "text-base";

  switch (variant) {
    case "h1":
      textSize = "text-5xl font-bold";
      break;
    case "h2":
      textSize = "text-3xl";
      break;
    case "s1":
      textSize = "text-xl";
      break;

    default:
      break;
  }

  const classNames = `${textStyle} ${textSize} ${style}`;

  return <RNText className={classNames}>{children}</RNText>;
};
