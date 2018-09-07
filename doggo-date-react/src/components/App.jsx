//AIzaSyB9MlVMZxHnie4R24XY9rLGyLad3BjN_aU
//fetch request from API_BASE, google maps,

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../style/app.css";
import parkImages from "../requests/parkImages.js";

import AuthRoute from "./AuthRoute";
import NavBar from "./NavBar";
import Home from "./Home";
import SignInPage from "./SignInPage";
import UserNewPage from "./UserNewPage";
import UserShowPage from "./UserShowPage";
import DoggoNewPage from "./DoggoNewPage";
import DoggoIndexPage from "./DoggoIndexPage";
import DoggoShowPage from "./DoggoShowPage";
import MapPage from "./MapPage";
// import Cube from "./Cube";

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
        <main
          className="parallax"
          style={{
            backgroundImage: `url(${parkImages[0]})`
          }}
        >
          <NavBar
            currentUser={this.state.currentUser}
            onSignOut={this.destroySession}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doggo/index" exact component={DoggoIndexPage} />
            <Route path="/user/new" exact component={UserNewPage} />
            <AuthRoute
              isAuth={currentUser}
              path="/user"
              exact
              render={props => (
                <UserShowPage currentUser={this.state.currentUser} {...props} />
              )}
            />
            <AuthRoute
              isAuth={currentUser}
              path="/doggo/new"
              exact
              render={props => <DoggoNewPage {...props} />}
            />
            <Route path="/doggo/index/:id" exact component={DoggoShowPage} />
            <Route path="/map_page" exact component={MapPage} />
            {/* <Route path="/cube" exact component={Cube} /> */}
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
