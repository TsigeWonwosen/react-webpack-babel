export function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };

    case "DECREMENT":
      return { ...state, count: state.count - action.payload };

    case "CLEAR":
      return { ...state, count: 0 };
    case "SHOW":
      return { ...state, show: !state.show };
    case "ADD_TODO":
      return { ...state, todo: [...state.todo, action.payload] };
    case "DELETE_TODO":
      let newTodos = state.todo.filter((todo) => todo.id !== action.payload);
      return { ...state, todo: newTodos };
    case "TOGGLE":
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "EDIT":
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.id ? { ...todo, task: action.task } : todo
        ),
      };
    default:
      return state;
  }
}
