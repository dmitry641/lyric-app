import React from "react";
import { useAlert } from "./AlertContextReducer";

export default function Main() {
  const { show } = useAlert();
  return (
    <div>
      <h1>Main</h1>
      <button onClick={() => show("Текст из MainReducer.js")}>
        Показать алерт
      </button>
    </div>
  );
}
