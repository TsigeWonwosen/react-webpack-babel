import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Count from "./components/Count";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
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
        <div className='app-title'>
          <h1>React With Webpack </h1>
          <span>[ Babel | Scss | Context| Reducer ]</span>
        </div>
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
              {show ? <TodoList /> : <h4>Todo List Is Hide</h4>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
