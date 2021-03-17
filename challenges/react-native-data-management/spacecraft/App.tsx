import React from 'react';
import { StarshipScreen } from './src/screen';
import { PilotScreen } from './src/screen';
import { QueryClient, QueryClientProvider } from 'react-query';

// Data Management: 🤸‍♀️ Exercise 2 `QueryClientProvider` should be here

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PilotScreen />
    </QueryClientProvider>
  );
};

export default App;
