import React, { Fragment, createRef } from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
      }
    
      state = {
        LogedUser: ""
      };
      componentDidMount() {
        console.log(this.ref);
      }
    
      handleLogin = (e, id) => {
        e.preventDefault();
        console.log(id);
      };
  render() {
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
                      style={{ minWidth: "250px" }}
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
                                  <div
                                    className="item"
                                    onClick={e => this.handleLogin(e, "id")}
                                  >
                                    <img
                                      className="ui avatar image"
                                      src="avatars/johndoe.png"
                                    />
                                    Jenny Hess
                                  </div>
                                  <div className="item">
                                    <div
                                      className="ui avatar image"
                                      src="avatars/johndoe.png"
                                    />
                                    Jenny Hess
                                  </div>
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

export default Login;