import { Image, Pressable, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useRouter } from "expo-router";

export interface StarshipProps {
  cost_in_credits: string;
  manufacturer: string;
  model: string;
  name: string;
  crew: string;
  hyperdrive_rating: string;
}

export interface StarshipCardProps {
  ship: StarshipProps;
}

export const StarshipCard = ({ ship }: StarshipCardProps) => {
  const router = useRouter();
  const { cost_in_credits: price, manufacturer, name: title } = ship;

  const handlePress = () => {
    router.push({
      pathname: "/starships/[id]",
      params: {
        id: ship.model,
        name: ship.name,
        model: ship.model,
        manufacturer: ship.manufacturer,
        cost_in_credits: ship.cost_in_credits,
        crew: ship.crew,
        hyperdrive_rating: ship.hyperdrive_rating,
      },
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <Card style={styles.containerCard}>
        <Image
          source={{ uri: `https://picsum.photos/seed/${title}/400/200` }}
          style={styles.image}
        />
        <Card.Title
          subtitle={manufacturer}
          title={title}
        />

        {price !== "unknown" && (
          <Card.Content>
            <Text variant="titleLarge">{price} credits</Text>
          </Card.Content>
        )}
        <Card.Actions>
          {price === "unknown" ? (
            <Button disabled>Not for sale</Button>
          ) : (
            <Button
              mode="contained-tonal"
              onPress={handlePress}
            >
              Buy this ship
            </Button>
          )}
        </Card.Actions>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 32,
    marginHorizontal: 24,
  },
  image: {
    borderRadius: 12,
    height: 200,
    width: "100%",
  },
});
