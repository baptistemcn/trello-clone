import React from "react";

import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";

export const App = () => {
  return (
    <AppContainer>
      <AddNewItem toogleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
