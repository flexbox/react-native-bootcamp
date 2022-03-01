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
