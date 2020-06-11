import React, { createContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { reducer } from "./showReducer";

export const TodoContext = createContext();
const defaultTodo = [
  { id: uuidv4(), task: "checking up webpack & React", completed: false },
  { id: uuidv4(), task: "Watching Daily News", completed: true },
  { id: uuidv4(), task: "Finalizing colorPicker Project", completed: false },
];
export function TodoProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    show: true,
    todo: JSON.parse(window.localStorage.getItem("todoList") || defaultTodo),
  });
  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(state.todo));
  });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
