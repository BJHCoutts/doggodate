import React, { Component } from "react";
import Doggo from "../requests/doggo";
import "../style/doggoIndexPage.css";
import { Link } from "react-router-dom";

import poop from "../images/misc/poop.svg";
import bone from "../images/misc/bone.svg";
// import DoggoImage from "../requests/doggoImage";

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

    const bgImage = array => {
      return array[Math.floor(Math.random() * array.length)];
    };

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
                <div
                  className="index__doggo_img"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}${
                      doggo.image
                    })`
                  }}
                />
                <div className="index__doggo_text">
                  <a className="index__doggo_name">
                    <Link
                      className="index__doggo_name"
                      to={`/doggos/${doggo.id}`}
                      style={{ fontSize: "1.25em" }}
                    >
                      {doggo.name}
                    </Link>
                  </a>
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
      </main>
    );
  }
}

export default DoggoIndexPage;
