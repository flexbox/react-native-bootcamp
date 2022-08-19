import { Text as RNText } from "react-native";
import React from "react";

type Props = {
  variant?: "h1" | "h2" | "s1" | "p1" | "p2";
  style?: string;
  children: React.ReactNode;
  color?: "light" | "dark" | "hint";
};

export const Text = ({ variant, style, children, color = "dark" }: Props) => {
  const textStyle = "text-base font-medium";
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
    case "p2":
      textSize = "font-bold";
      break;

    default:
      break;
  }

  let textColor = "";
  switch (color) {
    case "light":
      textColor += " text-white";
      break;
    case "dark":
      textColor += " text-black";
      break;
    case "hint":
      textColor += " text-gray-500";
      break;
  }

  const classNames = `${textColor} ${textStyle} ${textSize} ${style}`;

  return <RNText className={classNames}>{children}</RNText>;
};
