import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, Title } from "react-native-paper";

import { AppRoutes } from "../navigation/AppRoutes";

export interface StarshipCardProps {
  title: string;
  manufacturer: string;
  price: string;
}

const StarshipCard = ({ title, manufacturer, price }: StarshipCardProps) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("../../assets/starships/CR90corvette.jpg");
      break;
    case "stardestroyer":
      source = require("../../assets/starships/stardestroyer.jpg");
      break;
    case "sentinel-classlanding craft":
      source = require("../../assets/starships/sentinel-classlandingcraft.jpg");
      break;
    case "deathstar":
      source = require("../../assets/starships/deathstar.jpg");
      break;
    case "millenniumfalcon":
      source = require("../../assets/starships/millenniumfalcon.jpg");
      break;
    case "y-wing":
      source = require("../../assets/starships/y-wing.jpg");
      break;
    case "x-wing":
      source = require("../../assets/starships/x-wing.jpg");
      break;
    case "tieadvanced x1":
      source = require("../../assets/starships/tieadvancedx1.jpg");
      break;
    case "executor":
      source = require("../../assets/starships/executor.jpg");
      break;
    case "rebeltransport":
      source = require("../../assets/starships/rebeltransport.jpg");
      break;
  }

  const handlePress = () => {
    alert("Buy!");
  };

  const navigation = useNavigation();

  const handleGoToDetails = () => {
    navigation.navigate(AppRoutes.STARSHIP_DETAIL_SCREEN);
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
            <Button onPress={handlePress}>Buy this spaceship</Button>
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
