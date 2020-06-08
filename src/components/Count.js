import React, { useContext, memo } from "react";
import { TodoContext } from "../context/showContext";

import "../style/count.scss";

function Count(props) {
  const {
    state: { count },
    dispatch,
  } = useContext(TodoContext);

  return (
    <div className='count'>
      <div className='count-title'>
        <h1>Count - React Hooks</h1>
        <h2>{count}</h2>
      </div>
      <div className='count-btn'>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
          Add(+1)
        </button>{" "}
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
          Add (+10)
        </button>{" "}
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          Sub(-1)
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
          Sub(-10)
        </button>{" "}
        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>{" "}
        <br />
      </div>
    </div>
  );
}
export default memo(Count);
