import React from "react";
import { ACTIONS } from "../App";
export default function Todo({ todo, dispatch }) {
  const styles = { color: todo.complete ? "#AAA" : "#000" };

  return (
    <div>
      <span style={styles}>{todo.name}</span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
