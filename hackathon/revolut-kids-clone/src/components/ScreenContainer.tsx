import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ScreenContainer = ({ children }: Props) => {
  return (
    <View>
      <StatusBar style="auto" />
      {children}
    </View>
  );
};
