import React from "react";
import { useAlert, useToggle } from "./AlertContext";

export default function Alert() {
  const { visible, toggle } = useAlert();
  // const toggle = useToggle();

  if (!visible) return null;

  const styles = {
    padding: "2rem",
    margin: "2rem",
    backgroundColor: "gray",
    color: "white",
    textAlign: "center",
  };
  return (
    <div onClick={toggle} style={styles}>
      <p>Важное сообщение</p>
    </div>
  );
}
