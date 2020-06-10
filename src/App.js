import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Count from "./components/Count";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/showContext";

const App = () => {
  const {
    state: { show },
    dispatch,
  } = useContext(TodoContext);

  const showText = () => {
    dispatch({ type: "SHOW" });
  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <h1>React With Webpack Scss Context And Reducer</h1>
        <div className='row'>
          <div className='col'>
            <Count />
          </div>
          <div className='col col2'>
            <div className='todo-btn'>
              <button className='btnShow' onClick={showText}>
                {!show ? "Show Text" : "Hide Text"}
              </button>
            </div>
            <div className='todo-list'>
              {!show ? <TodoList /> : <h4>Todo List Is Hide</h4>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
