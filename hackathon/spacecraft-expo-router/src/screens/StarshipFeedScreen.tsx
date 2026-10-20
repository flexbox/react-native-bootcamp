import { FlatList, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";

import { ScreenContainer } from "@/components/ScreenContainer";
import { StarshipCard, StarshipProps } from "@/components/StarshipCard";
import { useStarships } from "@/hooks/useStarships";

interface RenderItemProps {
  item: StarshipProps;
}

const renderItem = ({ item }: RenderItemProps) => {
  return <StarshipCard ship={item} />;
};

export const StarshipFeedScreen = () => {
  const { data, isPending, isError, refetch } = useStarships();

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
      <ScreenContainer title="Error 😕">
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
    <ScreenContainer title="Starships">
      <FlatList
        data={data.results}
        keyExtractor={(ship) => ship.model}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </ScreenContainer>
  );
};

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
