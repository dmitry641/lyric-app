import React, { useState, useMemo, useEffect } from "react";

function complexCompute(number) {
  console.log("сложное вычисление числа");
  let i = 0;
  while (i < 2000000000) i++;
  return number * 2;
}

function App() {
  const [number, setNumber] = useState(25);
  const [colored, setColored] = useState(false);

  // Проблема: лишние вычисления.
  // const computed = complexCompute(number); // сложное вычисление
  //

  // const styles = { color: colored ? "red" : "black" };

  // Задержка отрисовки при смене цвета, так как при каждом рендере заново происходит сложное вычисление числа
  // Хотя в случае со стилями, нам не нужно вычислять число

  // Решение: хук useMemo поможет оптимизировать приложения. Кэширование. Обёртка
  // Теперь сложное вычисление будет происходить только при взаимодействии с number
  // А при взаимодействие со стилями не будет задержек
  const computed = useMemo(() => complexCompute(number), [number]);

  // Другое применение useMemo, кэшировать объекты
  const styles = useMemo(() => {
    return { color: colored ? "red" : "black" };
  }, [colored]);
  useEffect(() => {
    console.log("styles changed");
    // Проблема: useEffect срабатывает при изменение Number
    // Причина: объекты в JS хранятся по ссылочной системе. {q:1} не равен {q:1}
    // Поэтому при каждом рендере, создаётся новый объект styles
    // А useEffect смотрит за старым, и видит что он изменился и срабатывает Консоле.лог
    // Решение: кэшировать объект стилей
  }, [styles]);

  // Но не стоит кэшировать всё подряд, только действительно необходимые значения

  return (
    <div>
      <h1 style={styles}>Число: {computed}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Добавить</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Убрать</button>
      <hr></hr>
      <button onClick={() => setColored((prev) => !prev)}>Изменить цвет</button>
    </div>
  );
}

export default App;
