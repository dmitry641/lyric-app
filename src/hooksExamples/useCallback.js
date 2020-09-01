import React, { useState, useCallback } from "react";
import ItemsList from "./components/ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = { color: colored ? "red" : "black" };

  // const genItemsFromAPI = () => {
  //   return new Array(count).fill("").map((elem, idx) => `Элемент ${idx + 1}`);
  // };
  // При рендере компонента(смена цвета), будет происходить переобределении функции,
  // следовательно новая функция будет передана в ItemsList, и там сработает useEffect, что в свою очередь выполнит эту функцию
  // А это нам не нужно и это плохо для производительности. Так как это может быть запрос на сервер и тд.

  // Решение: useCallback, кэширование как юзеМемо. Только юзМемо оборочивает только значение, а юзКолбэк всю функцию
  const genItemsFromAPI = useCallback(
    (num = 1) => {
      return new Array(count)
        .fill("")
        .map((elem, idx) => `Элемент ${idx + num}`);
    },
    [count]
  ); // замыкание

  return (
    <div>
      <h1 style={styles}>Количество: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Добавить</button>
      <button onClick={() => setColored((prev) => !prev)}>Изменить цвет</button>
      <ItemsList getItems={genItemsFromAPI} />
    </div>
  );
}

export default App;
