import React from "react";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Constants from "expo-constants";

import { AuthenticationProvider } from "~/context/Authentication";
import { useAppearanceTheme } from "~/hooks/useAppearanceTheme";
import { Navigator } from "~/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  const appearanceTheme = useAppearanceTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={appearanceTheme}>
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
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require("./.storybook").default;
}

// eslint-disable-next-line import/no-default-export -- required for expo
export default AppEntryPoint;
