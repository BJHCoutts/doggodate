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
      <main className="index__ container_page">
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
                  {/* <a className="index__doggo_name"> */}
                  <Link
                    className="index__doggo_name"
                    to={`/doggo/index/${doggo.id}`}
                    style={{ fontSize: "1.25em" }}
                  >
                    {doggo.name}
                  </Link>
                  {/* </a> */}
                  <br />
                  <div className="index__doggo_details">
                    <span style={{ fontSize: "1em" }}>
                      "{doggo.meme_phrase}"
                    </span>
                    <br />
                  </div>
                  <small>
                    Member since: <br />
                    {new Date(doggo.created_at).toLocaleString()}
                    <br />
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
