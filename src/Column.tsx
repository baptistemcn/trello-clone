import React, { useRef } from "react";

import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";
import { useItemDrag } from "./utils/useItemDrag";

type ColumnProps = {
  id: string;
  text?: String;
};

export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({
    type: "COLUMN",
    id,
    text: "",
  });
  drag(ref);
  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toogleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
