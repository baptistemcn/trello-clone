import React, { createContext, Dispatch, useContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";
import { Action } from "./actions";
import { AppState, appStateReducer, List, Task } from "./AppStateReducer";
import { save } from "../api";

type AppStateContextProps = {
  draggedItem: DragItem | null;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

interface AppStateProviderProps {
  children: React.ReactNode;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "Do it",
      tasks: [{ id: "c0", text: "Generate App Scaffold" }],
    },
    {
      id: "1",
      text: "Do it",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Do it",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  draggedItem: null,
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { draggedItem, lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  useEffect(() => {
    save(state);
  }, [state]);

  return (
    <AppStateContext.Provider
      value={{ draggedItem, lists, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
