import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFoun";

function App() {
  return (
<Fragment>
      <Nav />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;