import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../actions/authedUser";
class Home extends React.Component {
  state = {};

  handleLogout = e => {
    e.preventDefault();
    this.props.dispatch(authenticate(null));
  };
  render() {
    const { authedUser, history } = this.props;
    if (authedUser === null) {
      history.push("/");
    }
    return (
      <div>
        <button onClick={e => this.handleLogout(e)}>Logout</button>
      </div>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(Home);