import { FlatList, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";

import { PlanetCard, PlanetProps } from "@/components/PlanetCard";
import { ScreenContainer } from "@/components/ScreenContainer";
import { usePlanets } from "@/hooks/usePlanets";

interface RenderItemProps {
  item: PlanetProps;
}

const renderItem = ({ item }: RenderItemProps) => {
  return <PlanetCard planet={item} />;
};

export default function PlanetsScreen() {
  const { data, isPending, isError, refetch } = usePlanets();

  if (isPending) {
    return (
      <ScreenContainer title="Loading…">
        <ActivityIndicator
          size="large"
          style={styles.loader}
        />
      </ScreenContainer>
    );
  }

  if (isError) {
    return (
      <ScreenContainer title="Error">
        <Text style={styles.errorText}>Something bad happened…</Text>
        <Button
          mode="outlined"
          onPress={() => refetch()}
        >
          Refetch
        </Button>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer title="Planets">
      <FlatList
        data={data.results}
        keyExtractor={(planet) => planet.name}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 32,
    paddingTop: 16,
  },
  loader: {
    marginTop: 50,
  },
});
