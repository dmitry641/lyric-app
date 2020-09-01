import React, { useState, useEffect } from "react";

export default function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);
  // Решение: useCallback
  useEffect(() => {
    const newItems = getItems(333);
    setItems(newItems);
    console.log("render");
    // срабатывает также при изменении другого стейта
    // так как компонент ре-рендирится, функции в нем также задаётся заново
    // а тут юзеЭфект смотрит на getItems, а он уже изменился
    // (сама функция таже, просто переопределенна из за рендера)
  }, [getItems]);
  return (
    <ul>
      {items.map((i) => {
        return <li key={i}>{i}</li>;
      })}
    </ul>
  );
}
