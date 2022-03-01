import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";

import { HeroesList } from "~/components/HeroesList";
import { client } from "~/graphql/client";
import theme from "~/theme/theme";
import { ScreenContainer } from "~/components/ScreenContainer";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ScreenContainer>
          <HeroesList />
        </ScreenContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// App.tsx always exports a single component
// eslint-disable-next-line import/no-default-export
export default App;
