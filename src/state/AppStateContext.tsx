import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Action } from "./actions";

import { Task, List, AppState, appStateReducer } from "./AppStateReducer";

type AppStateContextProps = {
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
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
