import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/userShowPage.css";

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
      <div className="main">
        <div className="baseDiv" style={{ margin: "1em" }}>
          <h1>{this.props.currentUser.full_name}</h1>
          <img
            src={this.props.currentUser.avatar}
            style={{ borderRadius: "50%" }}
          />
          <span>{this.props.currentUser.email}</span>
          <p>{this.props.currentUser.address}</p>
        </div>
        <div className="baseDiv" style={{ margin: "1em" }}>
          <h2 style={{ margin: "0 0 1em 0" }}>
            Doggos that this user belongs to:
          </h2>
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
      </div>
    );
  }
}

export default UserShowPage;
