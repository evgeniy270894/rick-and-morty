import React, { FC } from "react";
import { StyledSkeleton } from "../styles";

const LoadingContent: FC = () => {
  return (
    <>
      {new Array(8).fill(null).map((_, i) => (
        <StyledSkeleton
          key={i}
          animation="pulse"
          variant="rect"
          width={180}
          height={240}
        />
      ))}
    </>
  );
};

export { LoadingContent };
