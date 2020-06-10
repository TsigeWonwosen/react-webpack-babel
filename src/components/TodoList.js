import React, { useContext, memo, useState } from "react";
import { TodoContext } from "../context/showContext";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const {
    state: { todo },
    dispatch,
  } = useContext(TodoContext);

  const [task, setTask] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      let newTodo = {};
      newTodo.id = uuidv4();
      newTodo.task = task;
      newTodo.completed = false;
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setTask("");
    }
  };

  return (
    <div className='showParagraph'>
      <h3>Todo List</h3>
      <form onSubmit={onHandleSubmit}>
        <input
          className='todo-input'
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='btnSubmit' type='submit'>
          Submit
        </button>
      </form>

      <ul>
        {todo && todo.map((doTask) => <Todo {...doTask} key={doTask.id} />)}
      </ul>
    </div>
  );
}
export default memo(TodoList);
