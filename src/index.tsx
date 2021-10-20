import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import "./index.css";
import { App } from "./App";
import { AppStateProvider } from "./state/AppStateContext";

ReactDOM.render(
  <AppStateProvider>
    <DndProvider backend={Backend}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DndProvider>
  </AppStateProvider>,
  document.getElementById("root")
);
