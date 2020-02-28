import React, { FC, useEffect, useState } from "react";
import { useLazyQuery, QueryLazyOptions, useQuery } from "@apollo/react-hooks";
import debounce from "lodash/debounce";
import { GET_DELETED_CARDS, GET_CHARACTERS_LIST } from "../queryes";
import { ICharacters } from "../types";
import { LoadingContent } from "../components/LoadingContent";
import { PhotoCardsList } from "./PhotoCardsList";
import { Party } from "./Party";
import { StyledPhotoListContainer, SearchField } from "../styles";
import { Event, TNameVariables, IClientState } from "../types";

export interface IPartyProps {}

type TFetchDataMethod = (options: QueryLazyOptions<{ name?: string }>) => void;

let debouncedFetchData: (
  method: TFetchDataMethod,
  vars: TNameVariables
) => void;

const MainWidget: FC<IPartyProps> = () => {
  const [value, setValue] = useState<string>("");
  const [fetchData, { data, loading, error }] = useLazyQuery<
    ICharacters,
    { name?: string }
  >(GET_CHARACTERS_LIST);

  const { data: res } = useQuery<IClientState>(GET_DELETED_CARDS);

  useEffect(() => {
    debouncedFetchData = debounce(
      (method: TFetchDataMethod, vars: TNameVariables) => {
        if (vars.name.length > 1 || vars.name.length === 0) {
          method({
            variables: vars
          });
        }
      },
      300
    );
    fetchData({
      variables: { name: value }
    });
  }, []);

  const handleSearchChange = ({ target: { value } }: Event) => {
    setValue(value);
    debouncedFetchData(fetchData, { name: value });
  };

  const getFilteredCharacters = () => {
    const characters = data?.characters?.results || [];
    if (!!characters.length) {
      return characters
        .filter(
          ({ id }) => !res?.removedCharacters.some(item => item.id === id)
        )
        .slice(0, 8);
    } else return [];
  };

  const characters = getFilteredCharacters();

  return (
    <>
      <SearchField
        placeholder="Search"
        value={value}
        onChange={handleSearchChange}
      />
      <StyledPhotoListContainer>
        {error ? (
          <h1>{`Error: ${error?.message}`}</h1>
        ) : loading ? (
          <LoadingContent />
        ) : !!characters.length ? (
          <PhotoCardsList characters={characters} />
        ) : (
          <h1>{`Not found`}</h1>
        )}
      </StyledPhotoListContainer>
      <Party />
    </>
  );
};

export { MainWidget };
