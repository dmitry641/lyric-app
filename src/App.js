import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/lyricApp/layout/Navbar";
import Index from "./components/lyricApp/layout/Index";

function App() {
  return (
    <Router>
      <>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}></Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
