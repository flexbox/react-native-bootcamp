import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

import type { GameVehicle } from "@/api/starcitizen.schemas";

import { useListVehiclesInfinite } from "@/api/starcitizen";
import { ScreenContainer } from "@/components/ScreenContainer";
import { VehicleCard } from "@/components/VehicleCard";

// Enough to fill a few screens per request (the API allows up to 200)
const PAGE_SIZE = 50;

const renderItem = ({ item }: { item: GameVehicle }) => (
  <VehicleCard vehicle={item} />
);

export const VehiclesScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isPending,
    isRefetching,
    refetch,
  } = useListVehiclesInfinite(
    { "page[size]": PAGE_SIZE },
    {
      query: {
        // Orval's fetch client resolves every HTTP status, so we only keep 200 pages
        getNextPageParam: (lastPage) => {
          if (lastPage.status !== 200) {
            return undefined;
          }
          const { current_page, last_page } = lastPage.data.meta ?? {};
          if (current_page === undefined || last_page === undefined) {
            return undefined;
          }
          return current_page < last_page ? current_page + 1 : undefined;
        },
        initialPageParam: 1,
      },
    },
  );

  if (isPending) {
    return <ScreenContainer title="Loading…" />;
  }

  const firstPage = data?.pages[0];

  if (isError || firstPage?.status !== 200) {
    return (
      <ScreenContainer title="Error 😕">
        <Button
          mode="outlined"
          onPress={() => refetch()}
          style={styles.retry}
        >
          Refetch
        </Button>
      </ScreenContainer>
    );
  }

  const vehicles = data.pages.flatMap((page) =>
    page.status === 200 ? (page.data.data ?? []) : [],
  );
  const total = firstPage.data.meta?.total ?? vehicles.length;

  return (
    <ScreenContainer title="Vehicles">
      <Text
        style={styles.count}
        variant="bodyMedium"
      >
        {vehicles.length} of {total} vehicles
      </Text>
      <FlatList
        data={vehicles}
        keyExtractor={(vehicle, index) => vehicle.uuid ?? String(index)}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator style={styles.footer} />
          ) : undefined
        }
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        onRefresh={refetch}
        refreshing={isRefetching && !isFetchingNextPage}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  count: {
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  footer: {
    marginBottom: 24,
  },
  retry: {
    marginHorizontal: 24,
  },
});
