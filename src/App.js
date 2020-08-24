import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./component/dashboard";
import VideoPlayer from "./component/videoPlayer";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component = {Dashboard} />
          <Route exact path="/video-player" component = {VideoPlayer} />
        </Switch>
    </Router>
  );
}

export default App;
