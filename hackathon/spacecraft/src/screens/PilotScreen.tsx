import React from "react";
import { Text } from "react-native-paper";

import AppLayout from "~/components/AppLayout";
import { usePilot } from "~/hooks/usePilot";

interface PeopleProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

const PilotScreen = () => {
  const { isLoading, isError, data } = usePilot();

  if (isLoading) return <AppLayout title="Loading…" />;
  if (isError) return <AppLayout title="Error 😕" />;
  if (data.results === undefined) return <AppLayout title="Not Found" />;

  return (
    <AppLayout title="Pilots">
      {data.results.map((people: PeopleProps) => {
        return <PeopleCard key={ship.name} ship={ship} />;
      })}
    </AppLayout>
  );
};

export default PilotScreen;
