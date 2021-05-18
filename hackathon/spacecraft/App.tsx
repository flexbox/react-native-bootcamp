import React from 'react';
import { StarshipScreen } from './src/screen';
import { PilotScreen } from './src/screen';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StarshipScreen />
    </QueryClientProvider>
  );
};

export default App;
