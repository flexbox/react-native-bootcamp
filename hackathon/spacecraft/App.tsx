import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
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

// eslint-disable-next-line import/no-default-export
export default App;
