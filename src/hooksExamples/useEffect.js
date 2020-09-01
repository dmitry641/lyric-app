import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [type, setType] = useState("users");
  const [items, setItems] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // console.log("component render");
  // useEffect(() => console.log("render"));
  // useEffect(() => console.log("ComponentDidMount"), []);
  // useEffect(() => console.log(`Type change to ${type}`), [type]);

  useEffect(() => {
    console.log(`Type change to ${type}`);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    // cleaner
    return () => console.log("clean type");
  }, [type]);

  const mouseMoveHandler = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log("ComponentDidMount");
    window.addEventListener("mousemove", mouseMoveHandler);

    // cleaner, отписки, удаления слушателей/обработчиков при unMount компонента App
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Список</button>
      <button onClick={() => setType("posts")}>Посты</button>
      <p>Позиция курсора: {`${pos.x}, ${pos.y}`}</p>
      <p>Загруженные данные:</p>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}

export default App;
