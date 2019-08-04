import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <switch>
          <Route path="/" exact component={Home} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
