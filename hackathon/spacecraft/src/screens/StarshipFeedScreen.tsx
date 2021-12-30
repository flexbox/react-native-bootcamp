import React from "react";
import { useQuery } from "react-query";
import { FlatList } from "react-native";

import fetchAsync from "../lib/fetchAsync";
import ScreenContainer from "../components/ScreenContainer";
import StarshipCard from "../components/StarshipCard";

interface ShipProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

interface RenderItemProps {
  item: ShipProps;
}

// SOLUTION 2: with a FlatList - more performant
const renderItem = (props: RenderItemProps) => {
  const ship = props.item;

  return <StarshipCard ship={ship} />;
};

const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useQuery("starships", () =>
    fetchAsync("https://swapi.dev/api/starships/")
  );

  if (isLoading) return <ScreenContainer title="Loading…" />;
  if (isError) return <ScreenContainer title="Error 😕" />;
  if (data.results === undefined) return <ScreenContainer title="Not Found" />;

  return (
    <ScreenContainer title="Starships" withFooter>
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

export default StarshipFeedScreen;
