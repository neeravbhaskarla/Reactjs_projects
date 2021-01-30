import React, { useLayoutEffect, useRef } from "react";

const App = () => {
  const myBtn = useRef(null);
  useLayoutEffect(() => {
    const rect = myBtn.current.getBoundingClientRect();
    console.log(rect.width);
  });
  return (
    <>
      <button ref={myBtn}>what</button>
    </>
  );
};
export default App;
