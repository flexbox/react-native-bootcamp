import { useStarships } from "@/hooks/useStarships";
import { UseQueryResult } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface StarshipLoadableListProps {
  starships: string[];
}

function randomId() {
  return Math.random().toString(36).substring(7);
}

function StarshipLoadableListItem({
  result,
}: {
  result: UseQueryResult<any, Error>;
}) {
  if (result.isLoading) {
    return <Text variant="bodyMedium">Loading…</Text>;
  }

  if (result.isError) {
    return <Text variant="bodyMedium">Error 😕</Text>;
  }

  return (
    <View style={styles.container}>
      <Text variant="titleMedium">{result.data.name}</Text>
      <Text variant="bodyMedium">{result.data.model}</Text>
    </View>
  );
}

export const StarshipLoadableList = ({
  starships,
}: StarshipLoadableListProps) => {
  const queryResult = useStarships(starships);

  return queryResult.map((result) => {
    const id = randomId();
    return (
      <StarshipLoadableListItem
        key={id}
        result={result}
      />
    );
  });
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});
