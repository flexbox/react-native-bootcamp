import { gql } from "@apollo/client";

export const HEROES_QUERY = gql`
  query HeroesQuery {
    heroes(order_by: { counter: desc }) {
      avatar_url
      counter
      full_name
      github_username
      twitter_username
      id
    }
  }
`;
