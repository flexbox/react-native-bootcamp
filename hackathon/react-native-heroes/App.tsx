/* eslint-disable import/no-default-export */
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@shopify/restyle";

import { HeroesList } from "./src/components/HeroesList";
import theme from "./src/theme/theme";
import { ScreenContainer } from "./src/components/ScreenContainer";
import { client } from "./graphql/client";

export default function App() {
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
