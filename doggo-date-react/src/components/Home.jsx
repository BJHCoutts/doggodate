import React from "react";
import "../style/home.css";

import eyes from "../images/doggos/wide-eyed-dog.jpg";
import cuddletime from "../images/doggos/group/cuddletime.jpg";
import Square from "./DoggoSquare";

import sunYatSen from "../images/parks/classical-chinese-garden-image-via-Dr.-Sun-Yat-Sen-Classical-Chinese-Garden--e1517521757327.jpg";
import crabPark from "../images/parks/crab-park-image-via-@cairnm-Instagram-e1517521600510.jpg";
import deerLake from "../images/parks/deer-lake-park-image-via-@robby.stankowska-Instagram-e1517521725737.jpg";
import dudeChilling from "../images/parks/dude-chilling-park-image-via-@koseditionist-Instagram.jpg";
import hingePark from "../images/parks/hinge-park-image-via-@xnt87-Instagram-e1517521773108.jpg";
import jericho from "../images/parks/jericho-beach-image-via-Joe-Wolf.jpg";
import jonathonRogers from "../images/parks/jonathan-rogers-park-image-via-@myopicman-Instagram-e1517521647348.jpg";
import kitsBeach from "../images/parks/kitsilano-beach-image-via-GoToVan-Flickr-e1517520908246.jpg";
import lighthousePark from "../images/parks/lighthouse-park-image-via-@szesc_blota_stop-Instagram-e1517521787903.jpg";
import pacificSpirit from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import queenE from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import robsonSquare from "../images/parks/pacific-spirit-park-image-via-Pacific-Spirit-Park-Society-Facebook-e1517521739140.jpg";
import stanleyPark from "../images/parks/stanley-park-image-via-InSapphoWeTrust-Flickr-e1517521685289.jpg";
import troutLake from "../images/parks/trout-lake-park-image-via-Frank-Reginald-Wilson-Facebook-e1517521661522.jpg";
import vanDusen from "../images/parks/vandusen-botanical-garden-image-via-VanDusen-Botanical-Garden-Facebook-e1517521618594.jpg";

const Home = () => {
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
    <main
      className="parallax"
      style={{ backgroundImage: `url(${parkImages[1]})` }}
    >
      <div className="bar__text">Scroll Down to Brighten this Doggo's Day!</div>
      <div
        className="parallax bgimg-1 cover-image"
        style={{
          backgroundImage: `url(${eyes})`
        }}
      />
      <div className="bar" />
      <div
        className="home__title_bar parallax"
        style={{
          backgroundImage: `url(${parkImages[1]})`
        }}
      >
        <h1 className="home__title_banner"> Doggo Date</h1>
      </div>
      <div className="bar" />
      <div
        className="parallax"
        style={{
          backgroundImage: `url(${cuddletime})`,
          padding: "4vh 0"
        }}
      >
        <Square />
      </div>
      <div className="bar__text">
        Click Images to Reveal the Bright Doggo Future!
      </div>

      <div className="bar" />
      <div style={{ padding: "1em" }}>
        <h2>Bork!</h2>
        <p>
          Doggo ipsum stop it fren smol borking doggo with a long snoot for pats
          wrinkler sub woofer shoob wow such tempt woofer long bois, doing me a
          frighten thicc boofers vvv heckin good boys and girls. Puggorino dat
          tungg tho heckin blep corgo big ol you are doing me a frighten pupper
          such treat, boof long bois sub woofer clouds shoober extremely
          cuuuuuute. Corgo many pats borking doggo borkdrive floofs borkf such
          treat, most angery pupper I have ever seen smol boof vvv extremely
          cuuuuuute you are doin me a concern mlem, borking doggo fat boi very
          jealous pupper most angery pupper I have ever seen pupper. Thicc lotsa
          pats very good spot clouds wow such tempt yapper vvv porgo, boofers
          woofer mlem long water shoob he made many woofs borkf. Adorable doggo
          puggorino big ol pupper, borking doggo.
        </p>
        <h2>Arf!</h2>
        <p>
          He made many woofs bork aqua doggo noodle horse vvv sub woofer, tungg
          ur givin me a spook woofer blop you are doing me a frighten blep,
          borkdrive he made many woofs such treat heckin good boys. Stop it fren
          heck many pats vvv, dat tungg tho ruff. You are doin me a concern
          doggo stop it fren smol noodle horse shoober pupper, heckin good boys
          and girls what a nice floof dat tungg tho very taste wow. Doing me a
          frighten boof puggorino puggo blop, woofer corgo wow very biscit.
        </p>
        <h2>Woof!</h2>
        <p>
          Very hand that feed shibe much ruin diet heckin good boys and girls
          very good spot, such treat. Bork borking doggo heckin angery woofer
          stop it fren doge, pats heckin good boys and girls. Mlem shoob bork
          lotsa pats snoot, you are doin me a concern boofers waggy wags you are
          doing me a frighten shooberino, most angery pupper I have ever seen
          doggorino smol borking doggo with a long snoot for pats. Snoot doge
          big ol, shibe. Noodle horse sub woofer porgo he made many woofs corgo
          you are doin me a concern, extremely cuuuuuute aqua doggo fluffer
          mlem. Pats much ruin diet thicc corgo, tungg very hand that feed
          shibe. pats shoober. Waggy wags super chub heck the neighborhood
          pupper long bois, snoot doggo. Big ol pupper lotsa pats doggorino
          pupperino such treat shoober mlem, thicc I am bekom fat super chub
          wrinkler.
        </p>
        <h2>Yipp!</h2>
      </div>
      <div className="bar" />
    </main>
  );
};

export default Home;
