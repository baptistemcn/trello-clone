import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";

type ColumnProps = {
  id: string;
  text?: String;
};

export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toogleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
