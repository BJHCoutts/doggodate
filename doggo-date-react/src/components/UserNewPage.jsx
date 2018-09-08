import React, { Component } from "react";

import User from "../requests/user";

import "../style/userNewPage.css";

class UserNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validationErrors: []
    };

    this.createUser = this.createUser.bind(this);
  }

  createUser(event) {
    // const {currentTarget} = event;

    const formData = new FormData(event.currentTarget);

    User.create({
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      address: formData.get("address"),
      password: formData.get("password")
    }).then(data => {
      if (data.status === 422) {
        this.setState({
          validation: data.errors
        });
      } else {
        const doggoId = data.id;
        this.props.history.push(`/doggo/new`);
        // this.props.history.push(`/user`)
      }
    });
    event.preventDefault();
  }

  render() {
    const { validationErrors } = this.state;
    return (
      <main className="user-new-page__container">
        <form
          onSubmit={this.createUser}
          className="user-new-page__container_form"
        >
          <h2 style={{ margin: "0 0 1.5em 0" }}>Create New User</h2>
          <label htmlFor="first_name">
            First Name
            <br />
            <input name="first_name" id="first_name" />
          </label>

          <br />

          <label htmlFor="last_name">
            Last Name
            <br />
            <input name="last_name" id="last_name" />
          </label>

          <br />

          <label htmlFor="email">
            Email
            <br />
            <input name="email" id="email" />
          </label>

          <br />

          <label htmlFor="address">
            Address
            <br />
            <input name="address" id="address" />
          </label>

          <br />

          <label htmlFor="password">
            Password
            <br />
            <input name="password" id="password" />
          </label>

          <br />

          <input type="submit" value="submit" />
        </form>
      </main>
    );
  }
}

export default UserNewPage;
