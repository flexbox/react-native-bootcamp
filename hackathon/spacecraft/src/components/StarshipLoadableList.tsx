import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { useStarships } from "~/hooks/useStarships";

interface StarshipLoadableListProps {
  starships: string[];
}

export const StarshipLoadableList = ({
  starships,
}: StarshipLoadableListProps) => {
  const queryResult = useStarships(starships);

  return queryResult.map((result, index) => {
    if (result.isInitialLoading || result.isLoading) {
      return <Text variant="bodyMedium">Loading…</Text>;
    }

    if (result.isError) {
      return <Text variant="bodyMedium">Error 😕</Text>;
    }

    return (
      <View style={styles.container} key={`starship-${index}`}>
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
