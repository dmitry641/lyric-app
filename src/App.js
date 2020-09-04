import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/lyricApp/layout/Navbar";
import Index from "./components/lyricApp/layout/Index";
import { TracksProvider } from "./components/lyricApp/tracks/Tracks";
import LyricsPage from "./components/lyricApp/tracks/LyricsPage";

function App() {
  return (
    <TracksProvider>
      <Router>
        <>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route path="/lyrics/track/:id" component={LyricsPage}></Route>
            </Switch>
          </div>
        </>
      </Router>
    </TracksProvider>
  );
}

export default App;
