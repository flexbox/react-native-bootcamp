import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { Button } from "./src/components/Button";
import { Row } from "./src/components/Layout";
import { OnboardingSwiper } from "./src/components/OnboardingSwiper";

function App() {
  return (
    <View className="items-center justify-center bg-sky-400">
      <StatusBar style="auto" />
      <Row containerStyle="justify-around w-full py-4">
        <OnboardingSwiper>
          <View classNames="absolute bottom-0">
            <View className="mb-12 mx-6">
              <Row>
                <Button variant="primary" styles="flex-1 mr-2">
                  Log in
                </Button>
                <Button variant="secondary" styles="flex-1 ml-2">
                  Sign up
                </Button>
              </Row>
            </View>
          </View>
        </OnboardingSwiper>
      </Row>
    </View>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
