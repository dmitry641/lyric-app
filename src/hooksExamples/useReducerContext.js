import React from "react";
import Main from "./components/alert/MainReducer";
import Alert from "./components/alert/AlertReducer";
import AlertProvider from "./components/alert/AlertContextReducer";

function App() {
  return (
    <AlertProvider>
      <Alert></Alert>
      <Main></Main>
    </AlertProvider>
  );
}

export default App;
