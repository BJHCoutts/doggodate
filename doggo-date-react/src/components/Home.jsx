import React from "react";
import "../style/home.css";
import parkImages from "../requests/parkImages";

import eyes from "../images/doggos/wide-eyed-dog.jpg";
import cuddletime from "../images/doggos/group/cuddletime.jpg";
import Square from "./DoggoSquare";

const Home = () => {
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
