import React, { Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../actions/authedUser";

class Nav extends React.Component {
  componentDidMount() {
    const { authedUser, history } = this.props;
    if (authedUser === null) {
      history.push("/");
    }
  }

  handleLogout = e => {
    e.preventDefault();
    this.props.dispatch(authenticate(null));
    this.props.history.push("/");
  };

  render() {
    const { authedUser, users } = this.props;

    return (
      <Fragment>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/addquestion" className="item">
            Add Question
          </Link>
          <Link to="/leaderboard" className="item ">
            Leader Board
          </Link>

          <div className="right item">
          <div className="ui item" onClick={e => this.handleLogout(e)}>
              Logout
            </div>
            <div>
            {authedUser !== null && users[authedUser].name}
              <img
                className="ui  avatar image "
                src={authedUser !== null && users[authedUser].avatarURL}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(({ authedUser, users }) => {
    rreturn { authedUser, users };
  })(Nav)
);