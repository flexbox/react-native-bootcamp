import { View, Text } from "react-native";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export const Row = ({ children }: ButtonProps) => {
  return <View className="flex-row">{children}</View>;
};
