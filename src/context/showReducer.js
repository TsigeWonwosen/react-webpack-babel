export function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };

    case "DECREMENT":
      return { count: state.count - action.payload };

    case "CLEAR":
      return { ...state, count: 0 };
    case "SHOW":
      return { ...state, show: !state.show };
    default:
      return state;
  }
}
