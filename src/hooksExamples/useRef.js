import React, { useState, useEffect, useRef } from "react";

// let renderCnt = 1; // вне компонента не корректно

function App() {
  const [name, setName] = useState("");

  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   setRenderCount((prev) => prev + 1);
  // });
  // Бесконечный цикл. Так как useEffect без второго параметра срабатывает при каждом рендере
  // В свою очередь useEffect -> вызывает setRenderCount -> вызывает рендер, потом useEffect вызывает setRenderCount и так бесконечно

  // Решение с внешней переменной, но так делать не рекомендуется
  // useEffect(() => {
  //   // вне компонента не корректно
  //   renderCnt++;
  // });

  // Правильное решение - использовать useRef, который также используется в следующих ситуациях:

  // (1) Привязываем inputRef к DOM-элементу.
  // Часто используется для фокусировки на элементе
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();

    // так как сделанно на двух следующих строчка - делать нельзя
    // // inputRef.current.value = "qwerty";
    // // inputRef.current.style.background = "red";
    // для этого нужно использовать useState и другие хуки, а не useRef
  };

  // (2) Для избежания бесконечного цикла,
  // Для передачи значения между рендерами, без ре-рендера
  const renderCounter = useRef(1);
  useEffect(() => {
    renderCounter.current++;
    console.log(inputRef.current.value);
  });

  // (3) Сохранение предыдущего значения стейта
  const prevValue = useRef("");
  useEffect(() => {
    prevValue.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <h1>My name is {name}</h1>
      <hr></hr>
      <h3>Количество рендеров: {renderCounter.current}</h3>
      <button onClick={focusInput}>Фокус</button>
      <h3>Прошлое состояние "name": {prevValue.current}</h3>
    </div>
  );
}

export default App;
