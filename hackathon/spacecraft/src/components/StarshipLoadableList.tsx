import { useStarships } from "@/hooks/useStarships";
import { useId } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface StarshipLoadableListProps {
  starships: string[];
}

function getRandom(max: number) {
  return Math.floor(Math.random() * max);
}

export const StarshipLoadableList = ({
  starships,
}: StarshipLoadableListProps) => {
  const queryResult = useStarships(starships);
  const id = useId();

  return queryResult.map((result) => {
    if (result.isLoading) {
      return (
        <Text
          key={id}
          variant="bodyMedium"
        >
          Loading…
        </Text>
      );
    }

    if (result.isError) {
      return (
        <Text
          key={id}
          variant="bodyMedium"
        >
          Error 😕
        </Text>
      );
    }

    return (
      <View
        key={getRandom(1000)}
        style={styles.container}
      >
        <Text variant="titleMedium">{result.data.name}</Text>
        <Text variant="bodyMedium">{result.data.model}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});
