import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { useStarships } from "~/hooks/useStarships";

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

  return queryResult.map((result) => {
    if (result.isInitialLoading || result.isLoading) {
      return <Text variant="bodyMedium">Loading…</Text>;
    }

    if (result.isError) {
      return <Text variant="bodyMedium">Error 😕</Text>;
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
