import type { PressableProps } from "react-native";
import { Text, Pressable } from "react-native";
import type { ReactNode } from "react";
import React from "react";

interface Props extends PressableProps {
  variant?: "dark" | "light" | "filled" | "outline" | "ghost";
  styles?: string;
  children: ReactNode;
}

export const Button = ({
  variant = "filled",
  children,
  styles = "",
  ...props
}: Props) => {
  let style = "";
  let textStyle = "text-base font-bold px-10 py-3";
  let textColorVariant = "";

  switch (variant) {
    case "dark":
      style = "bg-black";
      textColorVariant = "text-white";
      break;
    case "light":
      style = "bg-white";
      textColorVariant = "text-black";
      break;
    case "filled":
      style = "bg-blue-500 hover:bg-blue-700";
      textColorVariant = "text-white";
      break;
    case "outline":
      style = "bg-blue-100 hover:bg-blue-700";
      textColorVariant = "text-blue-500";
      break;
    case "light":
      style = "bg-white hover:bg-indigo-700";
      textStyle = "text-black text-base font-medium";
      break;
    default:
      break;
  }

  const box =
    "inline-flex items-center border border-transparent rounded-xl shadow-sm";
  const classNames = `${styles} ${box} ${style}`;
  const textClassNames = `${textStyle} ${textColorVariant}`;

  // TODO: add variant styles when pressed
  // const activeClassNames = "bg-red-300";

  return (
    <Pressable className={classNames} {...props}>
      {/* {({ pressed }) => (
        <View className={pressed && activeClassNames}>
          <Text className={textClassNames}>{children}</Text>
        </View>
      )} */}

      <Text className={textClassNames}>{children}</Text>
    </Pressable>
  );
};
