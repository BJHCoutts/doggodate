import React, { Component } from "react";
import User from "../requests/user";

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
      <main>
        <h1>Test</h1>
      </main>
    );
  }
}

export default UserNewPage;
