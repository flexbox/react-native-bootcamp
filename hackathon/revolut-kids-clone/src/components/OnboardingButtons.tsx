import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Routes } from "../navigation/routes";

import { Row } from "./Layout";
import { Button } from "./Button";

export const OnboardingButtons = () => {
  const navigation = useNavigation();

  const navigateTo = (destination: Routes) => {
    navigation.navigate(destination as never);
  };

  return (
    <View className="absolute bottom-0 w-full">
      <View className="mb-12 mx-6">
        <Row>
          <View className="basis-1/2">
            <Button
              variant="dark"
              styles=""
              onPress={() => navigateTo(Routes.LOGIN_SCREEN)}
            >
              Log in
            </Button>
          </View>
          <View className="basis-1/2">
            <Button
              variant="light"
              onPress={() => navigateTo(Routes.SIGN_IN_SCREEN)}
            >
              Sign up
            </Button>
          </View>
        </Row>
      </View>
    </View>
  );
};
