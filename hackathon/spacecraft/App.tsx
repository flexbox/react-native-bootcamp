import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthenticationProvider } from "./src/context/Authentication";
import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <Navigator />
      </AuthenticationProvider>
    </QueryClientProvider>
  );
};

export default App;
