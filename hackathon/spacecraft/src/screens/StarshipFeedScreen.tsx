import { fetchStarships } from "@/hooks/useStarships";
import { useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";
import { Button } from "react-native-paper";

import { ScreenContainer } from "../components/ScreenContainer";
import { StarshipCard } from "../components/StarshipCard";

interface ShipProps {
  cost_in_credits: string;
  manufacturer: string;
  model: string;
  name: string;
}

interface RenderItemProps {
  index: number;
  item: ShipProps;
}

// SOLUTION 2: with a FlatList - more performant
const renderItem = (props: RenderItemProps) => {
  const ship = props.item;

  return (
    <StarshipCard
      index={props.index}
      ship={ship}
    />
  );
};

export const StarshipFeedScreen = () => {
  const { data, isError, isPending, refetch } = useQuery({
    queryFn: fetchStarships,
    queryKey: ["starships"],
  });

  if (isPending) {
    return <ScreenContainer title="Loading…" />;
  }

  if (isError) {
    return (
      <ScreenContainer title="Error 😕">
        <Button
          mode="outlined"
          onPress={() => refetch()}
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
        keyExtractor={(ship) => ship.model}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
};
