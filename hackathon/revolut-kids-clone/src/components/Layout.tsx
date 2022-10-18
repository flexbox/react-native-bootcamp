import { View } from "react-native";
import React from "react";

type RowProps = {
  children: React.ReactNode;
  containerStyle?: string;
};

export const Row = ({ children, containerStyle }: RowProps) => {
  return (
    <View className={`${containerStyle} flex flex-row items-center space-x-2`}>
      {children}
    </View>
  );
};
