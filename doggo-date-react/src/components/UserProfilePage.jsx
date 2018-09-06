import React, { Component } from "react";
// import Session from "../requests/session";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <h1>TEST</h1>
        <h1>{this.props.currentUser.full_name}</h1>
      </div>
    );
  }
}

export default UserProfilePage;
