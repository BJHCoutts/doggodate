import React, { Component } from "react";
import Logo from "../images/misc/logo.svg";
import "../style/index.css";

// import sunYatSen from "../images/parks/classical-chinese-garden-image-via-Dr.-Sun-Yat-Sen-Classical-Chinese-Garden--e1517521757327.jpg";
import crabPark from "../images/parks/crab-park-image-via-@cairnm-Instagram-e1517521600510.jpg";
import deerLake from "../images/parks/deer-lake-park-image-via-@robby.stankowska-Instagram-e1517521725737.jpg";
import dudeChilling from "../images/parks/dude-chilling-park-image-via-@koseditionist-Instagram.jpg";
import hingePark from "../images/parks/hinge-park-image-via-@xnt87-Instagram-e1517521773108.jpg";
// import jericho from "../images/parks/jericho-beach-image-via-Joe-Wolf%E2%80%8E-Facebook-e1517521581491.jpg";
import jonathonRogers from "../images/parks/jonathan-rogers-park-image-via-@myopicman-Instagram-e1517521647348.jpg";
import kitsBeach from "../images/parks/kitsilano-beach-image-via-GoToVan-Flickr-e1517520908246.jpg";
import lighthousePark from "../images/parks/lighthouse-park-image-via-@szesc_blota_stop-Instagram-e1517521787903.jpg";
import pacificSpirit from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import queenE from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import robsonSquare from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import stanleyPark from "../images/parks/stanley-park-image-via-InSapphoWeTrust-Flickr-e1517521685289.jpg";
import troutLake from "../images/parks/trout-lake-park-image-via-Frank-Reginald-Wilson-Facebook-e1517521661522.jpg";
import vanDusen from "../images/parks/vandusen-botanical-garden-image-via-VanDusen-Botanical-Garden-Facebook-e1517521618594.jpg";

class Home extends Component {
  //make function?
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const parkImages = [
      // sunYatSen,
      crabPark,
      deerLake,
      dudeChilling,
      hingePark,
      // jericho,
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

    // const parkImage = () => {
    //   return parkImages[Math.floor(Math.random * parkImages.length)];
    // };
    return (
      <main>
        <div
          className="parallax bgimg-1"
          style={{
            backgroundImage: `url(${parkImages[0]})`
          }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            velit rerum veritatis in eum ducimus cum aliquid fugit dolores
            repellendus voluptate tempora, placeat nostrum excepturi sit odit
            necessitatibus accusantium voluptatem animi laborum aspernatur fuga
            assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
            odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa
            dolorum molestiae earum, aut officia repudiandae! In fugit ipsum
            quidem. Eius quam odit maiores hic modi distinctio fuga deserunt
            culpa cumque, reiciendis rem assumenda ab optio odio aspernatur
            placeat doloribus necessitatibus vero doloremque voluptatum ratione
            ipsa? Soluta tempore quidem reprehenderit est voluptas, quam eveniet
            quae aspernatur harum, vel sapiente?
          </p>
        </div>
        <div className="bar" />
        <div
          className="parallax banner"
          style={{
            backgroundImage: `url(${parkImages[1]})`
          }}
        >
          <div className="cover-image" />
          <h1 className="titlebanner"> Doggo Date</h1>
        </div>
        <div className="bar" />
        {/* <div className="banner">
          <img src={Logo} style={{ padding: "2em", width: "300em" }} />
        </div> */}
        <div
          className="parallax bgimg-1"
          style={{
            backgroundImage: `url(${parkImages[1]})`
          }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            velit rerum veritatis in eum ducimus cum aliquid fugit dolores
            repellendus voluptate tempora, placeat nostrum excepturi sit odit
            necessitatibus accusantium voluptatem animi laborum aspernatur fuga
            assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
            odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa
            dolorum molestiae earum, aut officia repudiandae! In fugit ipsum
            quidem. Eius quam odit maiores hic modi distinctio fuga deserunt
            culpa cumque, reiciendis rem assumenda ab optio odio aspernatur
            placeat doloribus necessitatibus vero doloremque voluptatum ratione
            ipsa? Soluta tempore quidem reprehenderit est voluptas, quam eveniet
            quae aspernatur harum, vel sapiente?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            velit rerum veritatis in eum ducimus cum aliquid fugit dolores
            repellendus voluptate tempora, placeat nostrum excepturi sit odit
            necessitatibus accusantium voluptatem animi laborum aspernatur fuga
            assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
            odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa
            dolorum molestiae earum, aut officia repudiandae! In fugit ipsum
            quidem. Eius quam odit maiores hic modi distinctio fuga deserunt
            culpa cumque, reiciendis rem assumenda ab optio odio aspernatur
            placeat doloribus necessitatibus vero doloremque voluptatum ratione
            ipsa? Soluta tempore quidem reprehenderit est voluptas, quam eveniet
            quae aspernatur harum, vel sapiente?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            velit rerum veritatis in eum ducimus cum aliquid fugit dolores
            repellendus voluptate tempora, placeat nostrum excepturi sit odit
            necessitatibus accusantium voluptatem animi laborum aspernatur fuga
            assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
            odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa
            dolorum molestiae earum, aut officia repudiandae! In fugit ipsum
            quidem. Eius quam odit maiores hic modi distinctio fuga deserunt
            culpa cumque, reiciendis rem assumenda ab optio odio aspernatur
            placeat doloribus necessitatibus vero doloremque voluptatum ratione
            ipsa? Soluta tempore quidem reprehenderit est voluptas, quam eveniet
            quae aspernatur harum, vel sapiente?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            velit rerum veritatis in eum ducimus cum aliquid fugit dolores
            repellendus voluptate tempora, placeat nostrum excepturi sit odit
            necessitatibus accusantium voluptatem animi laborum aspernatur fuga
            assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
            odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa
            dolorum molestiae earum, aut officia repudiandae! In fugit ipsum
            quidem. Eius quam odit maiores hic modi distinctio fuga deserunt
            culpa cumque, reiciendis rem assumenda ab optio odio aspernatur
            placeat doloribus necessitatibus vero doloremque voluptatum ratione
            ipsa? Soluta tempore quidem reprehenderit est voluptas, quam eveniet
            quae aspernatur harum, vel sapiente?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            velit rerum veritatis in eum ducimus cum aliquid fugit dolores
            repellendus voluptate tempora, placeat nostrum excepturi sit odit
            necessitatibus accusantium voluptatem animi laborum aspernatur fuga
            assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
            odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa
            dolorum molestiae earum, aut officia repudiandae! In fugit ipsum
            quidem. Eius quam odit maiores hic modi distinctio fuga deserunt
            culpa cumque, reiciendis rem assumenda ab optio odio aspernatur
            placeat doloribus necessitatibus vero doloremque voluptatum ratione
            ipsa? Soluta tempore quidem reprehenderit est voluptas, quam eveniet
            quae aspernatur harum, vel sapiente?
          </p>
        </div>
      </main>
    );
  }
}

export default Home;
