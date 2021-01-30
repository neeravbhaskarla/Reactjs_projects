import React, { useEffect, useState } from "react";
const data = {
  names: [
    "Males",
    "Robert",
    "John",
    "James",
    "William",
    "Charles",
    "Richard",
    "Donald",
    "George",
    "Joseph",
    "Neerav"
  ]
};
const App = () => {
  const [name, setName] = useGenerateName();
  return <button onClick={() => setName("Neerav")}>{name}</button>;
};
function useGenerateName() {
  const [name, setName] = useState();
  const [reload, toggleReload] = useState(true);
  useEffect(() => {
    const name = data.names[Math.round(Math.random() * 10)];
    setName(name);
  }, [reload]);
  setTimeout(() => {
    toggleReload(!reload);
  }, 1000);
  return [name, setName];
}
export default App;
