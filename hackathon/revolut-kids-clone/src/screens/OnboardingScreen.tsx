import { View } from "react-native";

import { Button } from "../components/Button";
import { Row } from "../components/Layout";
import { OnboardingSwiper } from "../components/OnboardingSwiper";
import { ScreenContainer } from "../components/ScreenContainer";
import { Routes } from "../navigation/routes";

export const OnboardingScreen = ({ navigation }) => {
  const navigateTo = (destination: string) => {
    navigation.navigate(destination);
  };

  return (
    <ScreenContainer>
      <View className="items-center justify-center bg-sky-400">
        <Row containerStyle="justify-around w-full py-4">
          <OnboardingSwiper>
            <View className="absolute bottom-0 w-full">
              <View className="mb-12 mx-6">
                <Row>
                  <Button
                    variant="primary"
                    styles="flex-1 mr-2"
                    onPress={() => navigateTo(Routes.LOGIN_SCREEN)}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="secondary"
                    styles="flex-1 ml-2"
                    onPress={() => navigateTo(Routes.SIGN_IN_SCREEN)}
                  >
                    Sign up
                  </Button>
                </Row>
              </View>
            </View>
          </OnboardingSwiper>
        </Row>
      </View>
    </ScreenContainer>
  );
};
