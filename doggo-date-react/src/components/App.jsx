//AIzaSyB9MlVMZxHnie4R24XY9rLGyLad3BjN_aU
//fetch request from API_BASE, google maps,

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../style/app.css";

import AuthRoute from "./AuthRoute";
import NavBar from "./NavBar";
import Home from "./Home";
import SignInPage from "./SignInPage";
import DoggoNewPage from "./DoggoNewPage";
import DoggoIndexPage from "./DoggoIndexPage";
import DoggoShowPage from "./DoggoShowPage";
import MapPage from "./MapPage";
import Session from "../requests/session";
import User from "../requests/user";
import NotFoundPage from "./NotFoundPage";

import sunYatSen from "../images/parks/classical-chinese-garden-image-via-Dr.-Sun-Yat-Sen-Classical-Chinese-Garden--e1517521757327.jpg";
import crabPark from "../images/parks/crab-park-image-via-@cairnm-Instagram-e1517521600510.jpg";
import deerLake from "../images/parks/deer-lake-park-image-via-@robby.stankowska-Instagram-e1517521725737.jpg";
import dudeChilling from "../images/parks/dude-chilling-park-image-via-@koseditionist-Instagram.jpg";
import hingePark from "../images/parks/hinge-park-image-via-@xnt87-Instagram-e1517521773108.jpg";
import jericho from "../images/parks/jericho-beach-image-via-Joe-Wolf%E2%80%8E-Facebook-e1517521581491.jpg";
import jonathonRogers from "../images/parks/jonathan-rogers-park-image-via-@myopicman-Instagram-e1517521647348.jpg";
import kitsBeach from "../images/parks/kitsilano-beach-image-via-GoToVan-Flickr-e1517520908246.jpg";
import lighthousePark from "../images/parks/lighthouse-park-image-via-@szesc_blota_stop-Instagram-e1517521787903.jpg";
import pacificSpirit from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import queenE from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import robsonSquare from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import stanleyPark from "../images/parks/stanley-park-image-via-InSapphoWeTrust-Flickr-e1517521685289.jpg";
import troutLake from "../images/parks/trout-lake-park-image-via-Frank-Reginald-Wilson-Facebook-e1517521661522.jpg";
import vanDusen from "../images/parks/vandusen-botanical-garden-image-via-VanDusen-Botanical-Garden-Facebook-e1517521618594.jpg";

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

    const parkImages = [
      sunYatSen,
      crabPark,
      deerLake,
      dudeChilling,
      hingePark,
      jericho,
      jonathonRogers,
      kitsBeach,
      lighthousePark,
      pacificSpirit,
      queenE,
      robsonSquare,
      stanleyPark,
      troutLake,
      vanDusen
    ];

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    shuffleArray(parkImages);

    return (
      <Router>
        <main
          className="parallax"
          style={{
            backgroundImage: `url(${parkImages[1]})`
            // height: "100vh"
          }}
        >
          <NavBar
            currentUser={this.state.currentUser}
            onSignOut={this.destroySession}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign_in" exact component={SignInPage} />
            <AuthRoute
              isAuth={currentUser}
              path="/doggo/new"
              exact
              component={DoggoNewPage}
              render={props => <DoggoNewPage {...props} />}
            />
            <Route path="/doggo/index/:id" component={DoggoShowPage} />
            <Route path="/doggo/new" exact component={DoggoNewPage} />
            <Route path="/doggo/index" exact component={DoggoIndexPage} />
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
