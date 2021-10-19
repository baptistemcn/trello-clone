import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  children: React.ReactNode;
  text?: String;
};

export const Column = ({ children, text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toogleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
