import React from "react";
import Main from "./components/alert/Main";
import Alert from "./components/alert/Alert";
import AlertProvider from "./components/alert/AlertContext";

function App() {
  return (
    <AlertProvider>
      <Alert></Alert>
      <Main></Main>
    </AlertProvider>
  );
}

export default App;
