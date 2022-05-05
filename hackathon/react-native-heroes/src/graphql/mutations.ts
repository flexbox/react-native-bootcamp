import { gql } from "@apollo/client";

export const MUTATION_COUNTER = gql`
  mutation update_counter($id: Int!) {
    update_heroes(where: { id: { _eq: $id } }, _inc: { counter: 1 }) {
      affected_rows
      returning {
        id
        counter
      }
    }
  }
`;

export const ADD_HERO = gql`
  mutation AddHero(
    $avatarUrl: String!
    $fullName: String!
    $githubUsername: String!
    $twitterUsername: String!
  ) {
    insert_heroes_one(
      object: {
        avatar_url: $avatarUrl
        counter: 60
        full_name: $fullName
        github_username: $githubUsername
        twitter_username: $twitterUsername
      }
    ) {
      avatar_url
      counter
      full_name
      github_username
      twitter_username
      id
    }
  }
`;
