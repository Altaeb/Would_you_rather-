import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link className="item">Add Question</Link>
          <Link className="item active">LeaderBoard</Link>
          <div className="right menu">
            <Link className="ui item">Logout</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Nav;