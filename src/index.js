import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import { TodoProvider } from "./context/showContext";
import App from "./App";

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById("root")
);
