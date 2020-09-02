import React from "react";
import { useAlert } from "./AlertContextReducer";

export default function Alert() {
  const { hide, visible, text } = useAlert();

  if (!visible) return null;

  const styles = {
    padding: "2rem",
    margin: "2rem",
    backgroundColor: "gray",
    color: "white",
    textAlign: "center",
  };
  return (
    <div onClick={hide} style={styles}>
      <p>{text}</p>
    </div>
  );
}
