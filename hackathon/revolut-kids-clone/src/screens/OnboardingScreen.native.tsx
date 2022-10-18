import { View } from "react-native";

import { OnboardingButtons } from "../components/OnboardingButtons";
import { Row } from "../components/Layout";
import { OnboardingSwiper } from "../components/OnboardingSwiper";
import { ScreenContainer } from "../components/ScreenContainer";

export const OnboardingScreen = () => {
  return (
    <ScreenContainer>
      <View className="items-center justify-center bg-sky-400">
        <Row containerStyle="justify-around w-full py-4">
          <OnboardingSwiper>
            <OnboardingButtons />
          </OnboardingSwiper>
        </Row>
      </View>
    </ScreenContainer>
  );
};
