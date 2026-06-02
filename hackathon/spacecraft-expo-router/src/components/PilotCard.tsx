import { Image, Pressable, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export interface PilotProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface PilotCardProps {
  pilot: PilotProps;
}

export const PilotCard = ({ pilot }: PilotCardProps) => {
  const { name, birth_year, gender, height, mass } = pilot;

  return (
    <Pressable>
      <Card style={styles.containerCard}>
        <Image
          source={{ uri: `https://picsum.photos/seed/${name}/400/200` }}
          style={styles.image}
        />
        <Card.Title
          subtitle={`${gender} • ${birth_year}`}
          title={name}
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Height: {height}cm • Mass: {mass}kg
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
