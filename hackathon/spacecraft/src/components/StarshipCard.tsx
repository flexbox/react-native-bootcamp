import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import type { StarshipProps } from "../../api/types";
import { useImage } from "../hooks/useImage";
import { Routes } from "../navigation/Routes";

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
    Alert.alert("Buy!");
  };

  const navigation = useNavigation<StarshipDetailsScreenParams>();
  const handleGoToDetails = () => {
    navigation.navigate(Routes.STARSHIP_DETAILS_SCREEN, ship);
  };

  return (
    <Card style={styles.containerCard} onPress={handleGoToDetails}>
      <Card.Cover source={source} />
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
    </Card>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
});
