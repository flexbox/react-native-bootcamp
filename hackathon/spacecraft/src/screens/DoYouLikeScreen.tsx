import { Image } from "react-native";
import { List } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";
import { Routes } from "~/navigation/Routes";

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
        left={(props) => (
          <List.Icon
            {...props}
            icon="heart"
          />
        )}
        onPress={navigateToLoveScreen}
        title="I love Spacecraft"
      />
      <List.Item
        left={(props) => (
          <List.Icon
            {...props}
            icon="emoticon-sad-outline"
          />
        )}
        onPress={navigateToDisappointedScreen}
        title="I am disappointed"
      />
    </ScreenContainer>
  );
};
