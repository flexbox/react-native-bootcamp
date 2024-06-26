import React from "react";
import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";

import { ScreenContainer } from "../components/ScreenContainer";
import { StarshipCard } from "../components/StarshipCard";

import { fetchStarships } from "~/hooks/useStarships";

interface ShipProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

interface RenderItemProps {
  item: ShipProps;
  index: number;
}

// SOLUTION 2: with a FlatList - more performant
const renderItem = (props: RenderItemProps) => {
  const ship = props.item;

  return (
    <StarshipCard
      ship={ship}
      index={props.index}
    />
  );
};

export const StarshipFeedScreen = () => {
  const { isPending, isError, data, refetch } = useQuery({
    queryKey: ["starships"],
    queryFn: fetchStarships,
  });

  if (isPending) {
    return <ScreenContainer title="Loading…" />;
  }

  if (isError) {
    return (
      <ScreenContainer title="Error 😕">
        <Button
          onPress={() => refetch()}
          mode="outlined"
        >
          Refetch
        </Button>
      </ScreenContainer>
    );
  }

  if (data.results === undefined) {
    return <ScreenContainer title="Not Found" />;
  }

  return (
    <ScreenContainer title="Starships">
      {/* SOLUTION 1: with a map */}
      {/* {data.results.map((ship: ShipProps) => {
        return <StarshipCard key={ship.name} ship={ship} />;
      })} */}

      {/* SOLUTION 2: with a FlatList - more performant */}
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(ship) => ship.model}
      />
    </ScreenContainer>
  );
};
