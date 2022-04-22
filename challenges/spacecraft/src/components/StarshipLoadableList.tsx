import React from "react";
import { View, StyleSheet } from "react-native";
import { Subheading, Text } from "react-native-paper";

import { useStarships } from "~/hooks/useStarships";

interface StarshipLoadableListProps {
  starships: string[];
}

export const StarshipLoadableList = ({
  starships,
}: StarshipLoadableListProps) => {
  const queryResult = useStarships(starships);

  return queryResult.map((result) => {
    if (result.isLoading) return <Text>Loading…</Text>;
    if (result.isError) return <Text>Error 😕</Text>;
    return (
      <View style={styles.container}>
        <Subheading>{result.data.name}</Subheading>
        <Text>{result.data.model}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});
