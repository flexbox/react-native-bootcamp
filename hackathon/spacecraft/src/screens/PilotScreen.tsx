import type { PeopleProps } from "api/types";

import { FlatList, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

import { PeopleItem } from "@/components/PeopleItem";
import { ScreenContainer } from "@/components/ScreenContainer";
import { SkeletonListReanimated as SkeletonList } from "@/components/SkeletonListReanimated";
import { usePilot } from "@/hooks/usePilot";

interface RenderItemProps {
  item: PeopleProps;
}

const renderItem = (props: RenderItemProps) => {
  const people = props.item;

  return <PeopleItem people={people} />;
};

export const PilotScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isPending,
    refetch,
  } = usePilot();

  if (isPending) {
    return (
      <ScreenContainer title="Loading…">
        <SkeletonList />
      </ScreenContainer>
    );
  }
  if (isError) {
    return <ScreenContainer title="Error 😕" />;
  }

  const pilots = data.pages.flatMap((page) => page.results ?? []);

  if (pilots.length === 0) {
    return (
      <ScreenContainer title="Not Found">
        <Button
          mode="outlined"
          onPress={() => refetch()}
        >
          Refetch
        </Button>
      </ScreenContainer>
    );
  }

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <ScreenContainer title="Pilots">
      <FlatList
        data={pilots}
        keyExtractor={(people) => people.url}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator style={styles.footer} />
          ) : undefined
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 24,
  },
});
