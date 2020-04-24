import React, { Fragment, createRef } from "react";
import { connect } from "react-redux";
import { authenticate } from "../actions/authedUser";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
      }   
      state = {
        LogedUser: ""
      };
      componentDidMount() {
    // check if user is already authenticated redirect to Home screen
    const { authedUser } = this.props;
    console.log(this.props);
    if (authedUser !== null) {
      this.props.history.push("/home");
    }
      }
    
      handleLogin = (e, id) => {
        e.preventDefault();
        console.log(id);
        this.props.dispatch(authenticate(id));
        this.props.history.push("/home");
      };
  render() {
    const { users } = this.props;
    
    return (
        <Fragment>
          <div
            className="ui middle aligned center aligned grid"
            style={{ paddingTop: "25vh" }}
          >
            <div className="column">
              <div className="content">
                <div className="ui container  centered one column stackable center aligned page grid ">
                  <div>
                    <div
                      className="ui card center "
                      style={{ minWidth: "300px" }}
                    >
                      <div className="content" style={{ minHeight: "250px" }}>
                        Welcome to the Would You Rather App! Please select user to
                        continue
                      </div>
                      <div className="content">
                        <div className="extra content">
                          <br />
                          <form className="ui form">
                            <div className="ui compact menu">
                              <div className="ui simple dropdown item">
                                Select User To Start
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                {users.map(user => {
                                  return (
                                    <div
                                      className="item"
                                      key={user.id}
                                      onClick={e =>
                                        this.handleLogin(e, user.id)
                                      }
                                    >
                                      <img
                                        className="ui avatar image"
                                        src={user.avatarURL}
                                      />
                                      {user.name}
                                    </div>
                                  );
                                  })}
                                  <div className="item">
                                    <div
                                      className="ui avatar image"
                                      src="avatars/johndoe.png"
                                    />
                                    Jenny Hess
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
  }
}

function mapStateToProps({}) {}
export default connect(({ users, authedUser }) => {
  return {
    users: users !== undefined ? Object.values(users) : [],
    authedUser
  };
})(Login);