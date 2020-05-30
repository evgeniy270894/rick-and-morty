import React, { FC } from "react";
import {
  StyledPhotoCardContainer,
  StyledPhotoCard,
} from "../styles";
import {StyledCloseButton} from '../styles'

export interface IPhotoCardProps {
  onClose: () => void;
  onClick: () => void;
  src: string;
}

const PhotoCard: FC<IPhotoCardProps> = ({ onClick, onClose, src }) => {
  return (
    <StyledPhotoCardContainer>
      <StyledCloseButton onClick={onClose}/>
      <StyledPhotoCard onClick={onClick} src={src} />
      <StyledPhotoCard onClick={onClick} src={src} />
      <StyledPhotoCard onClick={onClick} src={src} />
      <StyledPhotoCard onClick={onClick} src={src} />
    </StyledPhotoCardContainer>
  );
};

export { PhotoCard };
