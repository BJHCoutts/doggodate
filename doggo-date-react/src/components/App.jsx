//questions, setup matches modelshow name, images from database

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../style/app.css";

import AuthRoute from "./AuthRoute";
import NavBar from "./NavBar";
import Home from "./Home";
import Square from "./Square";
import SignInPage from "./SignInPage";
import DoggoAdd from "./DoggoAdd";
import DoggoIndexPage from "./DoggoIndexPage";
import MapPage from "./MapPage";
import Session from "../requests/session";
import User from "../requests/user";
import NotFoundPage from "./NotFoundPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: undefined
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    Session.destroy().then(() => {
      this.setState({ currentUser: undefined });
    });
  }

  getUser() {
    return User.current().then(data => {
      if (data.id) {
        this.setState({
          currentUser: data
        });
      }
    });
  }

  componentDidMount() {
    this.getUser().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { currentUser, loading } = this.state;

    if (loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <Router>
        <main>
          <NavBar currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/square" exact component={Square} />
            <Route path="/sign_in" exact component={SignInPage} />
            {/* <AuthRoute
              isAuth={currentUser}
              path="/doggoadd"
              exact
              render={props => <DoggoAdd {...props} />}
            /> */}
            <Route path="/doggoadd" exact component={DoggoAdd} />
            <Route path="/doggoindex" exact component={DoggoIndexPage} />
            <Route path="/map_page" exact component={MapPage} />
            <Route
              path="/sign_in"
              render={props => (
                <SignInPage {...props} onSignIn={this.getUser} />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
