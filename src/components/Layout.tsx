import React, { FC } from "react";
import {StyledLayout, Container} from '../styles'


export interface ILayoutProps {}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Container>{children}</Container>
    </StyledLayout>
  );
};

export { Layout };
