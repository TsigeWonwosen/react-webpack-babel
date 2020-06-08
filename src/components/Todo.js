import React, { useContext, memo } from "react";
import { TodoContext } from "../context/showContext";

function Todo() {
  const { defaultTodo: Todo } = useContext(TodoContext);
  return (
    <div className='showParagraph'>
      <h3>Todo ..</h3>
      <ul>
        {Todo.map((todo) => (
          <li key={todo.id}>
            <input type='checkbox' name='vehicle1' value='completed'></input>{" "}
            {todo.task} <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(Todo);
