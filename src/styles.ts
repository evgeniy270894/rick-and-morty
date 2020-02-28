import styled from "@emotion/styled";
import { CloseButton } from "./components/CloseButton";
import Skeleton from "@material-ui/lab/Skeleton";
import Pagination from "@material-ui/lab/Pagination";

export const space = 8;
export const colors = {
  primary: "#DADADA",
  secondary: "#A0A0A0",
  background: "#fff",
  text: "#000000"
};

const Font = styled.div`
  @import "https://fonts.googleapis.com/css?family=Roboto:300,400,500";
  font-family: Roboto;
  font-style: normal;
`;

export const StyledLayout = styled(Font)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  color: ${colors.text};
  box-sizing: border-box;
`;

export const Card = styled.div<{ src: string }>`
  width: 180px;
  height: 220px;
  background-size: cover;
  background: url(${({ src }) => src}) no-repeat center;
  background-color: ${colors.primary};
`;

export const StyledPhotoCard = styled(Card)`
  cursor: pointer;
`;

export const StyledPartyCard = styled(Card)`
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Container = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SearchField = styled.input`
  padding: 0 30px;
  outline: none;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  margin: 0 15px;
  height: ${space * 10}px;
  background: ${colors.background};
  border: 1px solid ${colors.secondary};
`;

export const StyledPhotoCardContainer = styled.div`
  position: relative;
  margin: 15px;
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
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

export const StyledSkeleton = styled(Skeleton)`
  margin: 15px;
`;

export const StyledPartyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: ${colors.background};
  padding: 20px;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
`;

export const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    justify-content: center;
  }
`;
