import { Image, Pressable, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export interface PlanetProps {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
}

export interface PlanetCardProps {
  planet: PlanetProps;
}

export const PlanetCard = ({ planet }: PlanetCardProps) => {
  const { name, climate, terrain, population } = planet;

  return (
    <Pressable>
      <Card style={styles.containerCard}>
        <Image
          source={{ uri: `https://picsum.photos/seed/${name}/400/200` }}
          style={styles.image}
        />
        <Card.Title
          subtitle={`${climate} • ${terrain}`}
          title={name}
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Population: {population === "unknown" ? "Unknown" : population}
          </Text>
        </Card.Content>
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
