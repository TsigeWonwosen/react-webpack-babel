import React, { useState, useContext } from "react";
import { TodoContext } from "../context/showContext";

import EditTodo from "./EditTodo";

export default function Todo({ id, completed, task }) {
  const { dispatch } = useContext(TodoContext);
  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <EditTodo
          task={task}
          id={id}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
      ) : (
        <li
          style={{
            textDecorationLine: completed ? "line-through" : "",
            background: completed ? "#f4f4f4" : "",
          }}
        >
          <input
            type='checkbox'
            checked={completed}
            value={completed}
            onChange={() => {
              dispatch({
                type: "TOGGLE",
                payload: id,
              });
            }}
          />
          <span className='todo-task'>{task} </span>
          <div>
            <button onClick={() => setEdit(!isEdit)}>Edit</button>

            <button
              className='btnDelete'
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: id,
                })
              }
            >
              X
            </button>
          </div>
        </li>
      )}
    </div>
  );
}
