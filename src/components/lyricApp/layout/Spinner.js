import React from "react";
import spinner from "../../lyricApp/5.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ margin: "40px auto", display: "flex" }}
      ></img>
    </div>
  );
}
