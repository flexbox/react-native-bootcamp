import type { PressableProps } from "react-native";
import { View, Text, Pressable } from "react-native";
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
      style = "bg-white";
      textStyle = "text-black";
      break;
  }

  const box =
    "inline-flex items-center border border-transparent rounded-xl shadow-sm";
  const classNames = `${styles} ${box} ${style}`;
  const textClassNames = `${textStyle} ${textColorVariant}`;

  return (
    <Pressable {...props}>
      {({ pressed }) => {
        let activeClassNames = "";
        if (pressed) {
          switch (variant) {
            case "dark":
              activeClassNames = "bg-neutral-700";
              break;
            case "light":
              activeClassNames = "bg-neutral-100";
              break;
            case "filled":
              activeClassNames = "bg-blue-600 hover:bg-blue-700";
              break;
            case "outline":
              activeClassNames = "bg-blue-200 hover:bg-blue-700";
              break;
            case "ghost":
              activeClassNames = "opacity-3";
              break;
          }
        }

        const pressedClassNames = `${classNames} ${activeClassNames}`;

        return (
          <View className={pressedClassNames}>
            <Text className={textClassNames}>{children}</Text>
          </View>
        );
      }}
    </Pressable>
  );
};
