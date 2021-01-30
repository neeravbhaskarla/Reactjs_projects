import React, { useRef, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const Mybtn = useRef(null);
  const clickIt = () => Mybtn.current.click();
  return (
    <div>
      <Childclick variable={clickIt} />
      <h1>{count}</h1>
      <button ref={Mybtn} onClick={() => setCount(count + 1)}>
        button
      </button>
    </div>
  );
};
const Childclick = (props) => {
  return (
    <div>
      <button onClick={props.variable}>Child button</button>
    </div>
  );
};
export default App;
