import type { PeopleProps } from "api/types";
import React from "react";
import { FlatList } from "react-native";
import { Button } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";
import { PeopleItem } from "~/components/PeopleItem";
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
    return <ScreenContainer title="Loading…" />;
  }
  if (query.isError) {
    return <ScreenContainer title="Error 😕" />;
  }
  if (query.data.results === undefined) {
    return <ScreenContainer title="Not Found" />;
  }

  const handleLoadMore = () => {
    setPage((old) => old + 1);
  };

  return (
    <ScreenContainer title="Pilots">
      <Button onPress={handleLoadMore}>Load More</Button>
      <FlatList
        data={query.data.results}
        renderItem={renderItem}
        keyExtractor={(people) => people.name}
        onEndReachedThreshold={0.01}
        onEndReached={handleLoadMore}
      />
    </ScreenContainer>
  );
};
