import React from 'react';
import { Text, View } from 'react-native';
import { QueryClient, useQuery, QueryClientProvider } from 'react-query';
import fetchAsync from './lib/fetchAsync';
import AppShell from './AppShell';

const queryClient = new QueryClient();

const StarshipScreen = () => {
  // 🥑 Query data with fetchAsync
  const { data, isLoading, isError } = useQuery('starships', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error 😭</Text>;
  }

  return (
    <AppShell title={<Text>Error 😭</Text>}>
      <Text>{data[0].results}</Text>
    </AppShell>
  );
};

export default StarshipScreen;
