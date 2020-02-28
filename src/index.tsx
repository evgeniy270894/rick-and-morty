import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { App } from "./App";
import { resolvers } from "./resolvers";

const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: cache,
  resolvers,
});

const data = {
  removedCharacters: [],
  RickCard: {
    id: "",
    name: "",
    image: "",
    __typename: "RickCard"
  },
  MortyCard: {
    id: "",
    name: "",
    image: "",
    __typename: "MortyCard"
  }
};

cache.writeData({ data });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
