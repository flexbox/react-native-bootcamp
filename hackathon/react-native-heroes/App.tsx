import { HeroesList } from './components/HeroesList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { ThemeProvider } from '@shopify/restyle';
import theme from './theme/theme';
import { ScreenContainer } from './components/ScreenContainer';

const client = new ApolloClient({
  uri: 'https://react-native-heroes.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
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
