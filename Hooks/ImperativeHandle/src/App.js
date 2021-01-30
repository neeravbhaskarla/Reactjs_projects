import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const ref = useRef(null);
  return <Coolbutton ref={ref}>button</Coolbutton>;
};
function Coolbutton(props, ref) {
  const myBtn = useRef(null);
  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("clicking button");
      myBtn.current.click();
    }
  }));
  return <button ref={myBtn}>{props.children}</button>;
}
Coolbutton = forwardRef(Coolbutton);
export default App;
