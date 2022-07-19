import { View, Text, Pressable } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  variant: "primary" | "secondary";
  styles?: string;
  children: ReactNode;
};

export const Button = ({ variant, children, styles = "" }: Props) => {
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
    <Pressable className={classNames}>
      <Text className={textStyle}>{children}</Text>
    </Pressable>
  );
};
