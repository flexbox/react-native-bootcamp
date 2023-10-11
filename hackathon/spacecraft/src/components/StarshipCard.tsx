import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import Animated, {
  AnimateProps,
  FadeIn,
  FadeOut,
  FadeInDown,
} from "react-native-reanimated";

import type { StarshipProps } from "../../api/types";
import { useImage } from "../hooks/useImage";
import { Routes } from "../navigation/Routes";

import { Image } from "~/components/Image";

export function withAnimated<T extends object>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentClass<AnimateProps<T>, any> {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  class WithAnimated extends React.Component<T, any> {
    static displayName = `WithAnimated(${displayName})`;

    render(): React.ReactNode {
      return <WrappedComponent {...this.props} />;
    }
  }
  return Animated.createAnimatedComponent(WithAnimated);
}

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
  const title = ship.name;
  const price = ship.cost_in_credits;
  const { manufacturer } = ship;

  const source = useImage(title);

  const handleBuy = () => {
    Alert.alert("Give me the money!");
  };

  const navigation = useNavigation<StarshipDetailsScreenParams>();
  const handleGoToDetails = () => {
    navigation.navigate(Routes.STARSHIP_DETAILS_SCREEN, ship);
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
        index > 3 ? 0 : 100 * index
      )}
      // unmounting
      exiting={FadeOut.duration(250)}
    >
      <Image
        style={{ width: "100%", height: 200, borderRadius: 12 }}
        source={source}
      />
      {/* we remplace with an Image to have the benefits of `expo-image` */}
      {/* <Card.Cover source={source} /> */}
      <Card.Title title={title} subtitle={manufacturer} />

      <Card.Content>
        <Text variant="titleLarge">{price} credits</Text>
      </Card.Content>
      <Card.Actions>
        {price === "unknown" ? (
          <Button disabled>Not for sale</Button>
        ) : (
          <Button mode="contained-tonal" onPress={handleBuy}>
            Buy this ship
          </Button>
        )}
      </Card.Actions>
    </AnimatedCard>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
});
