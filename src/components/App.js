import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      Would you rethar
    </div>
  </Router>
  );
}

export default App;