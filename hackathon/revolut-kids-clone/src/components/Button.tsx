import type { PressableProps } from "react-native";
import { Text, Pressable } from "react-native";
import type { ReactNode } from "react";
import React from "react";

interface Props extends PressableProps {
  variant?: "dark" | "light" | "filled" | "outline" | "ghost";
  styles?: string;
  children: ReactNode;
}

export const Button = ({ variant, children, styles = "", ...props }: Props) => {
  let style = "bg-black hover:bg-indigo-700";
  let textStyle = "text-white text-base font-medium";

  switch (variant) {
    case "primary":
      break;
    case "secondary":
      style = "bg-white hover:bg-indigo-700";
      textStyle = "text-black text-base font-medium";
      break;

    default:
      break;
  }

  const box =
    "inline-flex items-center px-10 py-3 border border-transparent rounded-xl shadow-sm";
  const classNames = `${styles} ${box} ${style}`;

  return (
    <Pressable className={classNames} {...props}>
      <Text className={textStyle}>{children}</Text>
    </Pressable>
  );
};
