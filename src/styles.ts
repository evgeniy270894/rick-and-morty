import { injectGlobal } from "emotion";
import styled from "@emotion/styled";
import {CloseButton} from './components/CloseButton'

export const space = 8;
export const colors = {
  primary: "#DADADA",
  secondary: "#A0A0A0",
  background: "#fff",
  text: "#000000"
};

export default injectGlobal`
  html body {
    height: 100%;
  }
  body {
    @import "https://fonts.googleapis.com/css?family=Roboto:300,400,500";
    margin: 0;
    padding: 0;
    font-family: Roboto;
    background: ${colors.background};
    color: ${colors.text};
  }
  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0; 
    font-weight: bold;
  }
  h1 {
    font-size: 30px;
  }
`;

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPhotoCard = styled.div<{ src: string }>`
  width: 180px;
  height: 220px;
  background: url(${({ src }) => src}) no-repeat center;
  cursor: pointer;
  background-size: cover;
`;

export const Container = styled.div`
  width: 810px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SearchField = styled.input`
  outline: none;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  height: ${space * 10}px;
  background: ${colors.background};
  border: 1px solid ${colors.secondary};
`;

export const StyledPhotoCardContainer = styled.div`
  position: relative;
  //margin: 15px;
`;

export const StyledCloseButton = styled(CloseButton)`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`;

export const StyledPhotoListContainer = styled.div`
  display: flex;
  height: 530px;
  flex-wrap: wrap;
  justify-content: space-between;
  //align-items: center;
  align-content: space-evenly;
`;
