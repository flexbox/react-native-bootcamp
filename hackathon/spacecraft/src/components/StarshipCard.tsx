import React from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";

export interface StarshipCardProps {
  title: string;
  subtitle: string;
  manufacturer: string;
  price: string;
}

const StarshipCard = ({
  title,
  subtitle,
  manufacturer,
  price,
}: StarshipCardProps) => {
  return (
    <Card style={{ marginBottom: 32 }}>
      <Card.Title title={title} subtitle={subtitle} />
      <Card.Content>
        <Paragraph>{manufacturer}</Paragraph>
        <Title>{price} credits</Title>
      </Card.Content>
      <Card.Actions>
        <Button>Buy this spaceship</Button>
      </Card.Actions>
    </Card>
  );
};

export default StarshipCard;
