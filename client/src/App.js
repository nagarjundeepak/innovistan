import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/dashboard/navbar";
import Home from "./components/home";
import YoutubeHome from "./components/youtube/youtubeHome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/youtube" exact component={YoutubeHome} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
