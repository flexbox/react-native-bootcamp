import React from 'react';
import { useQuery } from 'react-query';
import fetchAsync from '../lib/fetchAsync';
import AppLayout from '../components/AppLayout';
import StarshipCard from '../components/StarshipCard';
import { FlatList } from 'react-native';

interface shipProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

// SOLUTION 2: with a FlatList - more performant
// const renderItem = ({ item }: shipProps) => {
//   return (
//     <StarshipCard
//       key={item.name}
//       title={item.name}
//       subtitle={item.model}
//       manufacturer={item.manufacturer}
//       price={item.cost_in_credits}
//     />
//   );
// };

const StarshipScreen = () => {
  const { isLoading, isError, data } = useQuery('starships', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );

  if (isLoading) return <AppLayout title="Loading…" />;
  if (isError) return <AppLayout title="Error 😕" />;
  if (data.results === undefined) return <AppLayout title="Not Found" />;

  return (
    <AppLayout title="Starships">
      {/* SOLUTION 1: with a map */}
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

      {/* SOLUTION 2: with a FlatList - more performant */}
      {/* <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(ship) => ship.model}
      /> */}
    </AppLayout>
  );
};

export default StarshipScreen;
