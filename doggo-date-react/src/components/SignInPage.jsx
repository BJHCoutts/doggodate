import React, { Component } from "react";
import Session from "../requests/session";
import "../style/signInPage.css";

import Vert from "../images/doggos/group/d381811e46fbde96b7a7437ca25afea1.jpg";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: undefined
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    }).then(data => {
      console.log(data);

      if (data.status === 404) {
        this.setState({
          errorMessage: "Invalid username or password"
        });
      } else {
        // Here we're using a callback prop to alert a parent
        // component that a sign was successful.
        // Our App component will be able to change its state
        // in response to this storing the user information
        // we need.
        const { onSignIn = () => {} } = this.props;
        onSignIn();

        // SignInPage gets access to the "history" prop,
        // because it is being rendered by a Route component.
        // (i.e. <Route path="/" component={SignInPage} />)
        this.props.history.push("/");
      }
    });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <main className="sign-in__container">
        <div className=".sign-in__row_forms">
          <div className="baseDiv sign-in__form">
            <h2>Please Sign In!</h2>
            <form onSubmit={this.createSession}>
              {errorMessage ? <p>{errorMessage}</p> : null}
              <div>
                <label htmlFor="email">Email</label> <br />
                <input type="text" name="email" id="email" />
              </div>

              <div>
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" id="password" />
              </div>

              <input type="submit" value="Sign In" />

              <br />

              <input type="checkbox" />

              <small>
                Doggo ipsum wrinkler heck shibe such treat blop borkdrive, I am
                bekom fat blep puggo most angery pupper I have ever seen.
                Wrinkler dat tungg tho heckin good boys long bois blop ur givin
                me a spook, wow such tempt wrinkler much ruin diet.
              </small>
            </form>
          </div>
          <div className="baseDiv sign-in__form sign-in__create_account">
            <h3 style={{ margin: "0 0 .5em 0" }}>Don't Have an account?</h3>
            <h5 style={{ margin: "0 0 1em 0" }}>
              Please click here to create one
            </h5>
            <button>Create account</button>
          </div>
        </div>
        <div
          className="sign-in__image"
          style={{ backgroundImage: `url(${Vert})` }}
        />
        {/* <img src={Vert} className="sign-in__image" /> */}
      </main>
    );
  }
}

export default SignInPage;
