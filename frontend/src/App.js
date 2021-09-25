import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
