import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";

import { AuthenticationProvider } from "./src/context/Authentication";
import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NetworkProvider>
          <AuthenticationProvider>
            <Navigator />
          </AuthenticationProvider>
        </NetworkProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
