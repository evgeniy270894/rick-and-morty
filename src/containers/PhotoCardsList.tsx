import React, { FC, useEffect, useState } from "react";
import { useLazyQuery, QueryLazyOptions } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Skeleton from '@material-ui/lab/Skeleton';
import debounce from "lodash/debounce";
import { ICharacters, ICharacter } from "../types";
import { PhotoCard } from "../components/PhotoCard";
import { StyledPhotoListContainer, SearchField } from "../styles";

export interface IPhotoCardsListProps {}

type TFetchDataMethod = (options: QueryLazyOptions<{ name?: string }>) => void;
type TVariables = {name: string};

const GET_CHARACTERS_LIST = gql`
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

let debouncedFetchData: (
  method: TFetchDataMethod,
  vars: TVariables
) => void;

const PhotoCardsList: FC<IPhotoCardsListProps> = () => {
  const [value, setValue] = useState<string>("");
  const [fetchData, { data, loading, error }] = useLazyQuery<
    ICharacters,
    { name?: string }
  >(GET_CHARACTERS_LIST);

  useEffect(() => {
    debouncedFetchData = debounce(
      (method: TFetchDataMethod, vars: TVariables) => {
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

  const handleSearchChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    debouncedFetchData(fetchData, { name: value });
  };

  const renderLoadingContent = () => {
    return new Array(8).fill(null).map((_, i) => (
      <Skeleton animation="pulse" variant="rect" width={180} height={240}/>
    ))
  };

  return (
    <>
      <SearchField
        placeholder="Search"
        value={value}
        onChange={handleSearchChange}
      />
      <StyledPhotoListContainer>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{`Error: ${error?.message}`}</h1>
        ) : (
          data?.characters?.results?.slice(0, 8).map(({ id, image }: ICharacter) => (
            <PhotoCard
              key={id}
              onClick={() => console.log(`===== CLICK =====>`, id)}
              src={image}
              onClose={() => console.log(`===== CLOSE =====>`, id)}
            />
          ))
        )}
      </StyledPhotoListContainer>
    </>
  );
};

export { PhotoCardsList };
