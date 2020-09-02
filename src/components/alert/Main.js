import React from "react";
import { useAlert, useToggle } from "./AlertContext";

export default function Main() {
  // const toggle = useToggle();
  const { toggle } = useAlert();
  return (
    <div>
      <h1>Main</h1>
      <button onClick={toggle}>Показать алерт</button>
    </div>
  );
}
