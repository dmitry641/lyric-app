import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import SomeComponent from "./components/SomeComponent";

function App() {
  return (
    <ThemeProvider>
      <SomeComponent />
    </ThemeProvider>
  );
}

export default App;
