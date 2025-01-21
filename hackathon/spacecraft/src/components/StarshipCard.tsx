import { Image } from "@/components/Image";
import { useNavigation } from "@react-navigation/native";
import CurrencyFormat from "react-currency-format";
import { Alert, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { FadeInDown, FadeOut } from "react-native-reanimated";

import type { StarshipProps } from "../../api/types";

import { Routes } from "../navigation/Routes";
import { getImageSource } from "../utils/getImageSource";
import { withAnimated } from "../utils/withAnimated";

const AnimatedCard = withAnimated(Card);

export interface StarshipCardProps {
  index: number;
  ship: StarshipProps;
}

interface StarshipDetailsScreenParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: any;
}

export const StarshipCard = ({ index, ship }: StarshipCardProps) => {
  const { cost_in_credits: price, manufacturer, name: title } = ship;

  const source = getImageSource(title);

  const handleBuy = () => {
    Alert.alert("Give me the money!");
  };

  const navigation = useNavigation<StarshipDetailsScreenParams>();
  const handleGoToDetails = () => {
    navigation.navigate(Routes.STARSHIP_DETAILS_SCREEN, {
      ...ship,
      image: source,
    });
  };

  // visibleIndex -> prop
  // Range = if index belongs to this range [visibleIndex - 2, visibleIndex+ 2] -> animate
  // otherwise don't animate
  return (
    <AnimatedCard
      // mounting
      entering={FadeInDown.duration(index > 3 ? 0 : 250).delay(
        index > 3 ? 0 : 100 * index,
      )}
      // unmounting
      exiting={FadeOut.duration(250)}
      onPress={handleGoToDetails}
      style={styles.containerCard}
    >
      <Image
        source={source}
        style={{ borderRadius: 12, height: 200, width: "100%" }}
        // sharedTransitionTag={`image-${ship.model}`}
      />
      {/* we remplace with an Image to have the benefits of `expo-image` */}
      {/* <Card.Cover source={source} /> */}
      <Card.Title
        subtitle={manufacturer}
        title={title}
      />

      {price !== "unknown" && (
        <Card.Content>
          <CurrencyFormat
            displayType="text"
            renderText={(value: string) => (
              <Text variant="titleLarge">{value} credits</Text>
            )}
            thousandSeparator={true}
            value={price}
          />
        </Card.Content>
      )}
      <Card.Actions>
        {price === "unknown" ? (
          <Button disabled>Not for sale</Button>
        ) : (
          <Button
            mode="contained-tonal"
            onPress={handleBuy}
          >
            Buy this ship
          </Button>
        )}
      </Card.Actions>
    </AnimatedCard>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 32,
    marginHorizontal: 24,
  },
});
