import React, { Component } from "react";
import Doggo from "../requests/doggo";
import Match from "../requests/match";
import "../style/doggoIndexPage.css";
import { Link } from "react-router-dom";

import poop from "../images/misc/poopcb.svg";
import bone from "../images/misc/bonecb.svg";
// import DoggoImage from "../requests/doggoImage";

class DoggoIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doggos: [],
      parkValue: "",
      userDoggoValue: "",
      doggoIdValue: ""
    };

    this.handlePoop = this.handlePoop.bind(this);
    this.handleBone = this.handleBone.bind(this);
  }

  componentDidMount() {
    Doggo.all().then(doggos => {
      this.setState({
        doggos: doggos
      });
    });
  }

  handleParkChange = e => {
    this.setState({
      parkValue: e.target.value
    });
  };

  handleDoggoChange = e => {
    this.setState({
      userDoggoValue: e.target.value
    });
  };

  handlePoop(event) {
    const { id } = event.target;

    this.state.userDoggoValue === ""
      ? alert(
          "Please select your own Doggo at the top of the page, before matching with others!"
        )
      : console.log(
          "Poop! This doggo id: " +
            id +
            " Your doggo id: " +
            this.state.userDoggoValue +
            " This match ID is: " +
            undefined
        );
    // Match.destroy()
  }

  handleBone(event) {
    const { id } = event.target;

    this.state.doggoValue === ""
      ? alert(
          "Please select your own Doggo at the top of the page, before matching with others!"
        )
      : console.log(
          "Bone! This doggo id: " +
            id +
            " Your doggo id: " +
            this.state.userDoggoValue
        );
    Match.create(this.state.userDoggoValue, {
      doggo_id: this.state.userDoggoValue,
      friend_id: id
    });
  }

  render() {
    const { doggos } = this.state;

    return (
      <main className="index__container_page" style={{ margin: "0 0 0 0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "1em 0 2em 0"
          }}
        >
          <form onSubmit={this.handleParkSubmit} className="doggo_index__form">
            <label>Pick your preferred park:</label>
            <br />
            <select
              value={this.state.parkValue}
              onChange={this.handleParkChange}
            >
              <option value="" disabled selected hidden>
                Please select a park...
              </option>
              <option value="Crab Park">Crab Park</option>
              <option value="Deer Lake">Deer Lake</option>
              <option value="Dude Chilling">Dude Chilling</option>
              <option value="Hinge Park">Hinge Park</option>
              <option value="Jericho">Jericho</option>
              <option value="Jonathon Rogers">Jonathon Rogers</option>
              <option value="Kits Beach">Kits Beach</option>
              <option value="Lighthouse Park">Lighthouse Park</option>
              <option value="Pacific Spirit">Pacific Spirit</option>
              <option value="Queen Elizabeth">Queen Elizabeth</option>
              <option value="Robson Square">Robson Square</option>
              <option value="Stanley Park">Stanley Park</option>
              <option value="Sun Yat Sen">Sun Yat Sen</option>
              <option value="Trout Lake">Trout Lake</option>
              <option value="Van Dusen">Van Dusen</option>
            </select>
          </form>

          <br />

          <form onSubmit={this.handleDoggoSubmit} className="doggo_index__form">
            <label>Pick your preferred doggo:</label>
            <br />
            <select
              value={this.state.userDoggoValue}
              onChange={this.handleDoggoChange}
            >
              <option value="" disabled selected hidden>
                {this.props.currentUser.first_name}
                's doggos...
              </option>
              {this.props.currentUser.doggos.map(doggo => (
                <option key={doggo.id} value={doggo.id}>
                  {doggo.name}
                </option>
              ))}
            </select>
          </form>
        </div>

        <ul style={{ padding: 0, listStyle: "none" }}>
          {doggos.filter(d => d.park === this.state.parkValue).map(doggo => (
            <li className="index__doggo_container" key={doggo.id}>
              <img
                src={poop}
                id={doggo.id}
                className="index__svg"
                // onClick={this.handlePoop.bind(this, doggo.id)}
                onClick={this.handlePoop}
                alt="poop icon"
              />
              <div className="index__doggo_card">
                <Link to={`/doggo/index/${doggo.id}`}>
                  <div
                    className="index__doggo_img"
                    style={{
                      backgroundImage: `url(${doggo.image})`
                    }}
                  />
                </Link>
                <div className="index__doggo_text">
                  <div style={{ margin: "0 0 .25em 0" }}>
                    <Link
                      className="index__doggo_name"
                      to={`/doggo/index/${doggo.id}`}
                    >
                      {doggo.name}
                    </Link>
                  </div>

                  <div className="index__doggo_subtitle">
                    "{doggo.meme_phrase}"
                  </div>

                  <div className="index__doggo_details">
                    <small>Favourite Park:</small>
                    <br />
                    <p style={{ fontSize: "1em" }}>{doggo.park}</p>
                  </div>
                  <small>
                    Member since: <br />
                    {new Date(doggo.created_at).toLocaleString()}
                  </small>
                </div>
              </div>
              <img
                src={bone}
                id={doggo.id}
                className="index__svg"
                // onClick={this.handleBone.bind(this, doggo.id)}
                onClick={this.handleBone}
                alt="bone icon"
              />
            </li>
          ))}
        </ul>
        <div className="index__end">End of List</div>
      </main>
    );
  }
}

export default DoggoIndexPage;
