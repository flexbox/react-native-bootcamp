import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Constants from "expo-constants";
import React from "react";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";

import { AuthenticationProvider } from "~/context/Authentication";
import { Navigator } from "~/navigation/Navigator";

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

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

// eslint-disable-next-line import/no-default-export
export default AppEntryPoint;
