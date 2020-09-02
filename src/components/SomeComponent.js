import React from "react";
import { useThemeUpdate, useThemeStyles } from "./ThemeContext";

export default function SomeComponent() {
  // const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = useThemeStyles();
  // const themeStyles = {
  //   backgroundColor: darkTheme ? "#333" : "#CCC",
  //   color: darkTheme ? "#CCC" : "#333",
  //   padding: "2rem",
  //   margin: "2rem",
  // };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyles}>Funciton theme</div>
    </div>
  );
}
