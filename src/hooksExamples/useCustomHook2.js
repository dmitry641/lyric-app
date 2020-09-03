import React from "react";
import useLocalStorage from "./hooksExamples/useLocalStorage";
import useUpadateLogger from "./hooksExamples/useUpadateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  useUpadateLogger(name);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <div>Имя: {name}</div>
    </div>
  );
}

export default App;
