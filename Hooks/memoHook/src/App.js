import React, { useMemo, useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const expandit = useMemo(() => {
    return state ** 2;
  }, [state]); // toggles when state changes and does the math
  return (
    <>
      <h1>{state}</h1>
      <h1>{expandit}</h1>
      <button onClick={() => setState(state + 1)}>Count</button>
    </>
  );
};
export default App;
