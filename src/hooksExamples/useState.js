import React, { useState } from "react";

function computeInitial() {
  console.log("calculating...");
  return Math.trunc(Math.random() * 30);
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitial()); при каждом рендере
  const [counter, setCounter] = useState(() => computeInitial()); // единожды

  const [state, setState] = useState({ title: "Счетчик", date: Date.now() });
  // объекты в useState используются реже
  const [title, setTitle] = useState("Счетчик");
  const [date, setDate] = useState(() => Date.now());

  function increment() {
    // setCounter(counter + 1);
    // setCounter(counter + 1); // counter будет прежним
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }
  function decrement() {
    setCounter((prev) => prev - 1);
  }

  function updateTitle() {
    // setState({ title: "Новый тайтл" }); // заменит весь объект
    setState((prev) => {
      return { ...prev, title: "Новый тайтл" };
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
      <button onClick={updateTitle}>Изменить тайтл</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
