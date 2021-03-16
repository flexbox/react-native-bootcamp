import React from 'react';
import { useQuery } from 'react-query';
import fetchAsync from '../lib/fetchAsync';
import AppLayout from '../components/AppLayout';
import StarshipCard from '../components/StarshipCard';
import { ScrollView } from 'react-native';

interface shipProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

const StarshipScreen = () => {
  const { isLoading, isError, data } = useQuery('starships', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );

  if (isLoading) return <AppLayout title="Loading..." />;
  if (isError) return <AppLayout title="Error 😕" />;

  return (
    <AppLayout title="Starships">
      <ScrollView>
        {data.results.map((ship: shipProps) => {
          return (
            <StarshipCard
              key={ship.name}
              title={ship.name}
              subtitle={ship.model}
              manufacturer={ship.manufacturer}
              price={ship.cost_in_credits}
            />
          );
        })}
      </ScrollView>
    </AppLayout>
  );
};

export default StarshipScreen;
