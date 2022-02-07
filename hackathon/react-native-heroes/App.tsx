import { HeroesList } from "./components/HeroesList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { ThemeProvider } from "@shopify/restyle";
import theme from "./theme/theme";
import { ScreenContainer } from "./components/ScreenContainer";
import config from "./config/config";

const client = new ApolloClient({
  uri: config.HASURA_API_URL,
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": config.HASURA_ADMIN_SECRET,
  },
});

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
