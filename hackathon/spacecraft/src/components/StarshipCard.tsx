import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import type { StarshipProps } from "../../api/types";
import { useImage } from "../hooks/useImage";
import { Routes } from "../navigation/Routes";

import { Image } from "~/components/Image";

export function createAnimatedComponentFrowardingRef<P, S>(
  Component: React.ComponentClass<P, S>
) {
  return React.forwardRef<React.Component<P, S>, P>((props, ref) => {
    class Wrapper extends React.Component<P, S> {
      render() {
        return <Component {...this.props} ref={ref} />;
      }
    }
    const AnimatedWrapper = Animated.createAnimatedComponent(Wrapper);
    return <AnimatedWrapper {...props} />;
  });
}

const AnimatedCard = createAnimatedComponentFrowardingRef(Card);

export interface StarshipCardProps {
  ship: StarshipProps;
}

interface StarshipDetailsScreenParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: any;
}

export const StarshipCard = ({ ship }: StarshipCardProps) => {
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

  return (
    <AnimatedCard
      style={styles.containerCard}
      onPress={handleGoToDetails}
      // mounting
      entering={FadeIn.duration(500)}
      // unmounting
      existing={FadeOut.duration(500)}
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
