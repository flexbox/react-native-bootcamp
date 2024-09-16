import CurrencyFormat from "react-currency-format";
import { Alert, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { FadeInDown, FadeOut } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import type { StarshipProps } from "../../api/types";
import { useImage } from "../hooks/useImage";
import { Routes } from "../navigation/Routes";
import { withAnimated } from "../utils/withAnimated";

import { Image } from "~/components/Image";

const AnimatedCard = withAnimated(Card);

export interface StarshipCardProps {
  ship: StarshipProps;
  index: number;
}

interface StarshipDetailsScreenParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: any;
}

export const StarshipCard = ({ ship, index }: StarshipCardProps) => {
  const { name: title, cost_in_credits: price, manufacturer } = ship;

  const source = useImage(title);

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
      style={styles.containerCard}
      onPress={handleGoToDetails}
      // mounting
      entering={FadeInDown.duration(index > 3 ? 0 : 250).delay(
        index > 3 ? 0 : 100 * index,
      )}
      // unmounting
      exiting={FadeOut.duration(250)}
    >
      <Image
        style={{ width: "100%", height: 200, borderRadius: 12 }}
        source={source}
        // sharedTransitionTag={`image-${ship.model}`}
      />
      {/* we remplace with an Image to have the benefits of `expo-image` */}
      {/* <Card.Cover source={source} /> */}
      <Card.Title
        title={title}
        subtitle={manufacturer}
      />

      {price !== "unknown" && (
        <Card.Content>
          <CurrencyFormat
            value={price}
            displayType="text"
            thousandSeparator={true}
            renderText={(value: string) => (
              <Text variant="titleLarge">{value} credits</Text>
            )}
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
