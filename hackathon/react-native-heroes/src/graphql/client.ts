import { ApolloClient, InMemoryCache } from "@apollo/client";

import config from "~/config/config";

export const client = new ApolloClient({
  uri: config.HASURA_API_URL,
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": config.HASURA_ADMIN_SECRET,
  },
});
