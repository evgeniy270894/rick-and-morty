import { gql } from "apollo-boost";

// export const typeDefs = gql`
//
// `;

// #  type Character {
//   #    id: ID!
//   #    name: String!
//   #    image: String!
//   #  }

export const GET_CHARACTERS_LIST = gql`
  query GetCharacters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_DELETED_CARDS = gql`
  query {
    removedCharacters @client {
      id
    }
  }
`;

export const GET_RICK_CARD = gql`
  query {
    RickCard @client {
      image
    }
  }
`;

export const GET_MORTY_CARD = gql`
  query {
    MortyCard @client {
      image
    }
  }
`;

export const REMOVE_CHARACTER = gql`
  mutation($id: ID!) {
    removeCharacter(id: $id) @client
  }
`;

export const CHOOSE_CHARACTER = gql`
  mutation($id: ID!, $name: String!, $image: String!) {
    chooseCharacter(id: $id, name: $name, image: $image) @client
  }
`;
