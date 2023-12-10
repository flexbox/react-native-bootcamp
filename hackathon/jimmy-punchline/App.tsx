import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

import AxiosProvider from "./src/context/AxiosProvider";
import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => (
  <AxiosProvider>
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider
        {...eva}
        theme={eva.light}
      >
        <Navigator />
      </ApplicationProvider>
    </QueryClientProvider>
  </AxiosProvider>
);

export default App;
