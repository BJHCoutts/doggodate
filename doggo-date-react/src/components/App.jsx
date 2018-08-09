import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../style/app.css";

import NavBar from "./NavBar";
import Home from "./Home";
import Square from "./Square";
import DoggosList from "./DoggosList";
import DoggoIndexPage from "./DoggoIndexPage";
import Map from "./Map";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <main>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/square" exact component={Square} />
            <Route path="/doggoslist" exact component={DoggosList} />
            <Route path="/doggoindex" exact component={DoggoIndexPage} />
            <Route path="/map" exact component={Map} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
