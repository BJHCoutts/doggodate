import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/userShowPage.css";

import Avatar from "../images/users/Littlefinger_Main.jpg";

class UserShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addDoggoLink = this.addDoggoLink.bind(this);
  }

  addDoggoLink() {
    this.props.history.push("/doggo/new");
  }

  render() {
    return (
      <main className="main user__container">
        <div className="baseDiv" style={{ margin: "1em" }}>
          <div className="innerDiv user__doggo_container">
            <div
              className="user__avatar"
              style={{
                backgroundImage: `url(${Avatar})`
              }}
            />
            <div className="user__info">
              <h1>{this.props.currentUser.full_name}</h1>
              <span>{this.props.currentUser.email}</span>
              <p>{this.props.currentUser.address}</p>
            </div>
          </div>
        </div>
        <div className="baseDiv" style={{ margin: "1em" }}>
          <h3 style={{ margin: "0 0 1em 0" }}>
            Doggos that this user belongs to:
          </h3>
          <div className="user__doggo_container">
            {this.props.currentUser.doggos.map((doggo, index) => (
              <div className="user__doggo_single">
                <Link to={`doggo/index/${doggo.id}`}>
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${doggo.image})` }}
                    className="user__doggo_image"
                  />
                </Link>

                <p>
                  <Link to={`doggo/index/${doggo.id}`}>{doggo.name}</Link>
                </p>
              </div>
            ))}
          </div>
          <button onClick={this.addDoggoLink}>Add a Doggo</button>
        </div>
      </main>
    );
  }
}

export default UserShowPage;
