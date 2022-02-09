import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Navigator } from "./src/navigation/Navigator";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigator />
    </ApplicationProvider>
  </QueryClientProvider>
);
