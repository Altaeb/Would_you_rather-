import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFoun";
import AnswerCard from "./AnswerCard";
import ResultCard from "./ResultCard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" exact component={Home} />
              <Route path="/answerquestion/:id" component={AnswerCard} />
              <Route path="/answerresults/:id" component={ResultCard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default connect()(App);