import { FlatList, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";

import { PilotCard, PilotProps } from "@/components/PilotCard";
import { ScreenContainer } from "@/components/ScreenContainer";
import { usePilots } from "@/hooks/usePilots";

interface RenderItemProps {
  item: PilotProps;
}

const renderItem = ({ item }: RenderItemProps) => {
  return <PilotCard pilot={item} />;
};

export default function PilotsScreen() {
  const { data, isPending, isError, refetch } = usePilots();

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
    <ScreenContainer title="Pilots">
      <FlatList
        data={data.results}
        keyExtractor={(pilot) => pilot.name}
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
