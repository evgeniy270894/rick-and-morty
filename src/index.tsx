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
  clientState: {
    defaults: {
      removedItems: [
        // {
        //   id: null,
        //   __typename: "deletedCard"
        // }
      ]
      // rickSlot: {
      //   name: "",
      //   image: ""
      // },
      // mortySlot: {
      //   name: "",
      //   image: ""
      // }
    },
    resolvers: resolvers
  }
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
