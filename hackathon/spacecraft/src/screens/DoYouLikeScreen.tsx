import React from "react";
import { Image } from "react-native";
import { List } from "react-native-paper";

import { Routes } from "~/navigation/Routes";
import { ScreenContainer } from "~/components/ScreenContainer";

interface DoYouLikeScreenProps {
  navigation: any;
}

export const DoYouLikeScreen = ({ navigation }: DoYouLikeScreenProps) => {
  const navigateToLoveScreen = () => {
    navigation.navigate(Routes.LOVE_SCREEN);
  };
  const navigateToDisappointedScreen = () => {
    navigation.navigate(Routes.DISAPPOINTED_SCREEN);
  };

  return (
    <ScreenContainer
      title={""}
      withGoBack={true}
    >
      <Image
        source={{
          uri: "https://media.giphy.com/media/e6e1P3wC6xkYg/giphy.gif",
        }}
        style={{ height: 200, width: "100%" }}
      />

      <List.Item
        title="I love Spacecraft"
        onPress={navigateToLoveScreen}
        left={(props) => (
          <List.Icon
            {...props}
            icon="heart"
          />
        )}
      />
      <List.Item
        title="I am disappointed"
        onPress={navigateToDisappointedScreen}
        left={(props) => (
          <List.Icon
            {...props}
            icon="emoticon-sad-outline"
          />
        )}
      />
    </ScreenContainer>
  );
};
