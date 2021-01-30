// Reducer
import React, { useReducer } from "react";
function reducer(state, action) {
  // takes the dispatch values as action
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, 0); // calls the reducer fuction when dispatch is called and 0 is default value
  return (
    <>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>{" "}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};
export default App;
