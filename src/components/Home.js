import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

class Home extends React.Component {
  state = {
    activeTab: "unanswered"
  };

  componentDidMount() {
    const { authedUser, history } = this.props;
    if (authedUser === null) {
      history.push("/");
    }
  }

  switchActivTab = (e, name) => {
    e.preventDefault();
    console.log(this.state.activeTab);
    this.setState({
      activeTab: name
    });
    console.log(this.state.activeTab);
  };

  render() {
    const { activeTab } = this.state;
    const unansweredActive = activeTab === "unasnswered" ? "active" : "";
    const answeredActive = activeTab === "unasnswered" ? "" : "active";

    return (
      <div>
                <Nav />

<br />

<div className="ui two top attached buttons">
  <div
    className={"ui button " + unansweredActive}
    onClick={e => this.switchActivTab(e, "unasnswered")}
  >
    Unasnswered
  </div>
  <div
    className={"ui button " + answeredActive}
    onClick={e => this.switchActivTab(e, "asnswered")}
  >
    Ansnswered
  </div>
</div>
{activeTab == "unasnswered" ? (
  <div className="ui attached segment">
    <p>un ansered questions </p>
  </div>
) : (
  <div className="ui attached segment">
    <p>ansered questions </p>
  </div>
)}

<br></br>
      </div>
    );
  }
}

export default connect(({ authedUser }) => {
  return { authedUser };
})(Home);