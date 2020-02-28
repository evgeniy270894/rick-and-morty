import React, { FC } from "react";
import { StyledPartyCard, StyledPartyContainer, Title } from "../styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_MORTY_CARD, GET_RICK_CARD } from "../queryes";

export interface IPartyProps {}

type TImage = { image: string };

const Party: FC<IPartyProps> = () => {
  const { data: morty } = useQuery<{ MortyCard: TImage }>(GET_MORTY_CARD);
  const { data: rick } = useQuery<{ RickCard: TImage }>(GET_RICK_CARD);

  return (
    <StyledPartyContainer>
      <StyledPartyCard src={rick?.RickCard.image || ""}>
        {!rick?.RickCard.image && <Title>RICK</Title>}
      </StyledPartyCard>
      <StyledPartyCard src={morty?.MortyCard.image || ""}>
        {!morty?.MortyCard.image && <Title>MORTY</Title>}
      </StyledPartyCard>
    </StyledPartyContainer>
  );
};

export { Party };
