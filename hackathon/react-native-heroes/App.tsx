import { HeroesList } from "./components/HeroesList";
import { ApolloProvider } from "@apollo/client";

import { ThemeProvider } from "@shopify/restyle";
import theme from "./theme/theme";
import { ScreenContainer } from "./components/ScreenContainer";
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
