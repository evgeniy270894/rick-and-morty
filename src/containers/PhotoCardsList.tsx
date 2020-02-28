import React, { FC } from "react";
import { ICharacter } from "../types";
import { PhotoCard } from "../components/PhotoCard";
import { REMOVE_CHARACTER, CHOOSE_CHARACTER } from "../queryes";
import { useMutation } from "@apollo/react-hooks";

export interface IPhotoCardsListProps {
  characters: ICharacter[];
}

type TRemoveCardVars = { id: string };

const PhotoCardsList: FC<IPhotoCardsListProps> = ({ characters }) => {
  const [removeCard] = useMutation<TRemoveCardVars, TRemoveCardVars>(
    REMOVE_CHARACTER
  );

  const [chooseCard] = useMutation<ICharacter, ICharacter>(CHOOSE_CHARACTER);

  const handleRemoveCard = (id: string) => () => {
    removeCard({ variables: { id } });
  };

  const handleChooseCard = (character: ICharacter) => () => {
    chooseCard({ variables: { ...character } });
  };

  return (
    <>
      {characters.map(item => (
        <PhotoCard
          key={item.id}
          onClick={handleChooseCard(item)}
          src={item.image}
          onClose={handleRemoveCard(item.id)}
        />
      ))}
    </>
  );
};

export { PhotoCardsList };
