import { View } from "react-native";
import React from "react";

import { OnboardingButtons } from "../components/OnboardingButtons";
import { Row } from "../components/Layout";

export const OnboardingScreen = () => {
  return (
    <View className="items-center justify-center bg-sky-400 flex-1">
      <Row containerStyle="justify-around w-full py-4">
        <OnboardingButtons />
      </Row>
    </View>
  );
};
