import React, { Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../actions/authedUser";

class Nav extends React.Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.dispatch(authenticate(null));
    this.props.history.push("/");
  };

  render() {
    const { authedUser, history } = this.props;

    return (
      <Fragment>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link className="item">Add Question</Link>
          <Link className="item active">Leader Board</Link>

          <div className="right item">
          <div className="ui item" onClick={e => this.handleLogout(e)}>
              Logout
            </div>
            Elliot
            <img className="ui  avatar image " src="avatars/sarahedo.png" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(({ authedUser }) => {
    return { authedUser };
  })(Nav)
);