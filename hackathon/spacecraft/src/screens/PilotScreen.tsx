import type { PeopleProps } from "api/types";

import { FlatList } from "react-native";
import { Button } from "react-native-paper";

import { PeopleItem } from "~/components/PeopleItem";
import { ScreenContainer } from "~/components/ScreenContainer";
import { SkeletonList } from "~/components/SkeletonList";
import { usePilot } from "~/hooks/usePilot";

interface RenderItemProps {
  item: PeopleProps;
}

const renderItem = (props: RenderItemProps) => {
  const people = props.item;

  return <PeopleItem people={people} />;
};

export const PilotScreen = () => {
  const { query, setPage } = usePilot();

  if (query.isLoading) {
    return (
      <ScreenContainer title="Loading…">
        <SkeletonList />
      </ScreenContainer>
    );
  }
  if (query.isError) {
    return <ScreenContainer title="Error 😕" />;
  }
  if (query.data.results === undefined) {
    return (
      <ScreenContainer title="Not Found">
        <Button
          mode="outlined"
          onPress={() => query.refetch()}
        >
          Refetch
        </Button>
      </ScreenContainer>
    );
  }

  const handleLoadMore = () => {
    setPage((old) => old + 1);
  };

  return (
    <ScreenContainer title="Pilots">
      <Button onPress={handleLoadMore}>Load More</Button>
      <FlatList
        data={query.data.results}
        keyExtractor={(people) => people.name}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.01}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
};
