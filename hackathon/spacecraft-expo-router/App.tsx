import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as PaperProvider } from "react-native-paper";

import { NetworkProvider } from "./src/context/Network";
import { LoginScreen } from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NetworkProvider>
          {/* <LoginScreen /> */}
          {/* <TermsScreen /> */}
          <StarshipFeedScreen />
        </NetworkProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.rnstorybook").default;
}

export default AppEntryPoint;
