import React from "react";

export interface ICharacter {
  id: string;
  name: string;
  image: string;
}

export interface ICharacters {
  characters: {
    results: ICharacter[] | null;
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
  };
}

export type TRemovedCharacter = {
  id: string;
};

export interface IClientState {
  removedCharacters: TRemovedCharacter[];
  rick: string;
  morty: string;
}

export type TNameVariables = { name: string };
export type Event = React.ChangeEvent<HTMLInputElement>;
