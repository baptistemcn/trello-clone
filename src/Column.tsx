import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text?: String;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
    </ColumnContainer>
  );
};
