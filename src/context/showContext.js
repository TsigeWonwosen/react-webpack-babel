import React, { createContext, useReducer } from "react";
import { reducer } from "./showReducer";

export const TodoContext = createContext();
const defaultTodo = [
  { id: 1, task: "checking up webpack", completed: false },
  { id: 2, task: "Watching Daily News", completed: true },
  { id: 3, task: "Finalizing colorPicker Project", completed: false },
];
export function TodoProvider(props) {
  const [state, dispatch] = useReducer(reducer, { count: 0, show: false });

  return (
    <TodoContext.Provider value={{ defaultTodo, state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
