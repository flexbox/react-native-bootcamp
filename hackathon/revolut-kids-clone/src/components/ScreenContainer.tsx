import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "./Button";

type Props = {
  children: React.ReactNode;
  withGoBack?: boolean;
};

export const ScreenContainer = ({ children, withGoBack }: Props) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar style="auto" />
      {withGoBack && (
        <View className="mt-8 px-5">
          <Button onPress={() => navigation.goBack()}>⬅️</Button>
        </View>
      )}
      {children}
    </View>
  );
};
