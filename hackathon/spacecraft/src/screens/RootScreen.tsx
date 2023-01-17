import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";

import { AuthenticationProvider } from "../context/Authentication";
import { Navigator } from "../navigation/Navigator";

const queryClient = new QueryClient();

export const RootScreen = () => {
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
