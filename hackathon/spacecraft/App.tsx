/* eslint-disable import/no-default-export */
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "react-native-offline";

import { AuthenticationProvider } from "./src/context/Authentication";
import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <Navigator />
        </AuthenticationProvider>
      </QueryClientProvider>
    </NetworkProvider>
  );
};

export default App;
