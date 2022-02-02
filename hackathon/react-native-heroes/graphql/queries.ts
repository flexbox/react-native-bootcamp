import { gql } from '@apollo/client';

export const HEROES_QUERY = gql`
  query HeroesQuery {
    heroes(order_by: { id: asc }) {
      avatar_url
      counter
      full_name
      github_username
      twitter_username
      id
    }
  }
`;
