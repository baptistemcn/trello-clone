import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  children: React.ReactNode;
  text?: String;
};

export const Column = ({ children, text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
