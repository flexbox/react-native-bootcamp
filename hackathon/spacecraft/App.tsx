import React from 'react';
import { StarshipScreen } from './src/screen';
import { PilotScreen } from './src/screen';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginScreen from './src/screen/final/LoginScreen';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <LoginScreen /> */}
      <StarshipScreen />
    </QueryClientProvider>
  );
};

export default App;
