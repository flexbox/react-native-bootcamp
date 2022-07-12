import { View, Text } from "react-native";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  containerStyle?: string;
};

export const Row = ({ children, containerStyle }: ButtonProps) => {
  console.log("file: Layout.tsx ~ line 10 ~ Row ~ className", containerStyle);
  return <View className={`${containerStyle} flex-row`}>{children}</View>;
};
