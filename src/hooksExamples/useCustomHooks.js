import React, { useState, useEffect } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log(`Value changed ${value}`);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const clear = () => setValue("");
  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

function App() {
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const nameHandler = (e) => setName(e.target.value);
  // const lastNameHandler = (e) => setLastName(e.target.value);
  // useLogger(name);

  const inputName = useInput("");
  const inputLastName = useInput("");
  useLogger(inputName.value);
  useLogger(inputLastName.value);

  return (
    <div>
      <input type="text" {...inputName.bind}></input>
      <br></br>
      <input type="text" {...inputLastName.bind}></input>
      <div>Имя: {inputName.value}</div>
      <div>Фамилия: {inputLastName.value}</div>
      <button
        onClick={() => {
          inputName.clear();
          inputLastName.clear();
        }}
      >
        Очистить
      </button>
    </div>
  );
}

/* 

  return (
    <div>
      <input value={name} type="text" onChange={nameHandler}></input>
      <br></br>
      <input value={lastName} type="text" onChange={lastNameHandler}></input>
      <div>Имя: {name}</div>
      <div>Фамилия: {lastName}</div>
    </div>
  );

*/

export default App;
