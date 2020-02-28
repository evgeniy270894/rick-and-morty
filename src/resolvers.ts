import { ApolloCache } from "apollo-cache";
import { Resolvers } from "apollo-client";
import { GET_DELETED_CARDS } from "./queryes";
import { IClientState } from "./types";

type ResolverFn = (
  parent: any,
  args: Record<string, any>,
  { cache }: { cache: ApolloCache<IClientState> }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {}

interface AppResolvers extends Resolvers {
  Mutation: ResolverMap;
}

export const resolvers: AppResolvers = {
  Mutation: {
    removeCharacter: (_, { id }, { cache }) => {
      const result = cache.readQuery<IClientState>({
        query: GET_DELETED_CARDS
      });
      const removedCharacters = [
        ...(result?.removedCharacters || []),
        { id, __typename: "removedCharacters" }
      ];
      cache.writeData({
        data: {
          removedCharacters
        }
      });
      return removedCharacters;
    },
    chooseCharacter: (_, { id, name, image }, { cache }) => {
      name = name.toLowerCase();
      const character = name.includes("rick")
        ? "RickCard"
        : name.includes("morty")
        ? "MortyCard"
        : null;

      if (character) {
        const data = {
          [character]: {
            id,
            name,
            image,
            __typename: character
          }
        };
        cache.writeData({ data });
        return data;
      }
    }
  }
};
