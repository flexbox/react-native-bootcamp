import { PeopleProps } from "api/types";
import React from "react";
import { FlatList, View } from "react-native";
import { Button, Headline } from "react-native-paper";

import AppLayout from "~/components/AppLayout";
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

  if (query.isLoading) return <AppLayout title="Loading…" />;
  if (query.isError) return <AppLayout title="Error 😕" />;
  if (query.data.results === undefined) return <AppLayout title="Not Found" />;

  const handleLoadMore = () => {
    setPage((old) => old + 1);
  };

  return (
    <AppLayout title="Pilots">
      <Button onPress={handleLoadMore}>Load More</Button>
      <FlatList
        data={query.data.results}
        renderItem={renderItem}
        keyExtractor={(people) => people.name}
        onEndReachedThreshold={0.01}
        onEndReached={handleLoadMore}
      />
    </AppLayout>
  );
};
