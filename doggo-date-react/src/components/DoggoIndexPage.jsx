import React, { Component } from "react";
import Doggo from "../requests/doggo";
import "../style/doggoIndexPage.css";
import { Link } from "react-router-dom";

import poop from "../images/misc/poopcb.svg";
import bone from "../images/misc/bonecb.svg";
// import DoggoImage from "../requests/doggoImage";

class DoggoIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doggos: []
    };
  }

  componentDidMount() {
    Doggo.all().then(doggos => {
      this.setState({
        doggos: doggos
      });
    });
  }

  render() {
    const { doggos } = this.state;

    return (
      <main className="index__container_page">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1em 0 2em 0"
          }}
          className="doggo-index__end"
        >
          <form onSubmit={this.handleSubmit}>
            <label>Pick your preferred park:</label>
            <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="" disabled selected hidden>
                Please select a park...
              </option>
              <option value="">Crab Park</option>
              <option value="">Deer Lake</option>
              <option value="">Dude Chilling</option>
              <option value="">Hinge Park</option>
              <option value="">Jericho</option>
              <option value="">Jonathon Rogers</option>
              <option value="">Kits Beach</option>
              <option value="">Lighthouse Park</option>
              <option value="">Pacific Spirit</option>
              <option value="">Queen Elizabeth</option>
              <option value="">Robson Square</option>
              <option value="">Stanley Park</option>
              <option value="">Sun Yat Sen</option>
              <option value="">Trout Lake</option>
              <option value="">Van Dusen</option>
            </select>
          </form>
        </div>

        <ul style={{ padding: 0, listStyle: "none" }}>
          {doggos.map((doggo, index) => (
            <li className="index__doggo_container" key={doggo.id}>
              {/* <div
                className="index__doggo_img"
                style={{
                  backgroundImage: `url(${DoggoImage.random.message})`
                }}
              /> */}
              <img src={poop} className="svg" />
              <div className="index__doggo_card">
                <Link to={`/doggo/index/${doggo.id}`}>
                  <div
                    className="index__doggo_img"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}${
                        doggo.image
                      })`
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
              <img src={bone} className="svg" />
            </li>
          ))}
        </ul>
        <div className="index__end">End of List</div>
        {/* <h1>Filtered List</h1>
          <ul>
            {doggos.map((park) => {
              return <Doggo park={parkName} key={doggos.id}/>
            })}
          </ul> */}
      </main>
    );
  }
}

export default DoggoIndexPage;
