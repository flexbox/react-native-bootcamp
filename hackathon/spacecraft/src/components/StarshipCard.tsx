import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, Title } from "react-native-paper";

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

const StarshipCard = ({ ship }: StarshipCardProps) => {
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
    <TouchableOpacity onPress={handleGoToDetails}>
      <Card style={styles.containerCard}>
        <Card.Cover source={source} />
        <Card.Title title={title} subtitle={manufacturer} />
        <Card.Content>
          <Title>{price} credits</Title>
        </Card.Content>
        <Card.Actions>
          {price === "unknown" ? (
            <Button disabled>Not for sale</Button>
          ) : (
            <Button onPress={handleBuy}>Buy this spaceship</Button>
          )}
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 32,
  },
});

export default StarshipCard;
