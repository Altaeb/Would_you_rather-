import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const { authedUser, history } = this.props;
    if (authedUser === null) {
      // history.push("/");
    }
    return (
      <Fragment>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link className="item">Add Question</Link>
          <Link className="item active">Leader Board</Link>

          <div className="right item">
            <Link className="ui item">Logout</Link>
            Elliot
            <img className="ui  avatar image " src="avatars/sarahedo.png" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(Nav);