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
        <div className="baseDiv" style={{ margin: "1em" }}>
          <h1>{this.props.currentUser.full_name}</h1>
        </div>
        <div className="baseDiv" style={{ margin: "1em" }}>
          <h2>Doggos that this user belongs to:</h2>
          <ul>
            {this.props.currentUser.doggos.map((doggo, index) => (
              <li key={index}>{doggo.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
