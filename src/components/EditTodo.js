import React, { useState } from "react";

export default function EditTodo({ task, id, handleEdit, dispatch }) {
  const [newTask, setTask] = useState(task);

  const handelEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT",
      task: newTask,
      id,
    });
    handleEdit();
  };
  return (
    <div>
      <form onSubmit={handelEdit}>
        <input
          className='todo-input'
          type='text'
          value={newTask}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
