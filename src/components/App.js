import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFoun";
import AnswerCard from "./AnswerCard";
import ResultCard from "./ResultCard";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";

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
              <Route path="/home" component={Home} />
              <Route path="/questions/:id" component={AnswerCard} />
              <Route path="/answerresults/:id" component={ResultCard} />
              <Route path="/home" component={Home} />
              <Route path="/questions/:id" component={AnswerCard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default connect()(App);