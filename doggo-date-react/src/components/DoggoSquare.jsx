import React from "react";
import "../style/doggoSquare.css";
import archmageAlfie from "../images/doggos/archmage_alfie.jpg";
import bumbleBertha from "../images/doggos/bumble_bertha.jpg";
import drillBitDarel from "../images/doggos/drill_bit_darel.jpg";
import fourFistsPhil from "../images/doggos/four_fists_phil.jpg";
import inbreadDog from "../images/doggos/inbread_dog.jpg";
import knightNicholas from "../images/doggos/knight_nicholas.jpg";
import larryTheLion from "../images/doggos/larry_the_lion.jpg";
import lumberjackLaurence from "../images/doggos/lumberjack_laurence.jpg";
import moneybagsMichael from "../images/doggos/moneybags_michael.jpg";
import ninaTheNinja from "../images/doggos/nina_the_ninja.jpg";
import paws from "../images/doggos/paws.jpg";
import rebelWithACauseCallum from "../images/doggos/rebel_with_a_cause_callum.jpg";
import toxicTim from "../images/doggos/toxic_tim.jpg";
import wickedWitchWendy from "../images/doggos/wicked_witch_wendy.jpg";

const doggoImages = [
  archmageAlfie,
  bumbleBertha,
  drillBitDarel,
  fourFistsPhil,
  inbreadDog,
  knightNicholas,
  larryTheLion,
  lumberjackLaurence,
  moneybagsMichael,
  ninaTheNinja,
  paws,
  rebelWithACauseCallum,
  toxicTim,
  wickedWitchWendy
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(doggoImages);

document.addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(node => {
    node.classList.toggle("flipped");
  });
});

const DoggoSquare = () => {
  return (
    <main className="container">
      {/* <div className="baseDiv">
          <img src={logo} width="300em" />
        </div> */}
      {/* <div
          className={this.state.active ? "flipped" : null}
          onClick={this.toggleClass}
        /> */}
      <div className="row">
        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[0]})`
            }}
          />
          <div className="back" />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[1]})`
            }}
          />
          <div className="back" style={{ backgroundPositionX: "-200px" }} />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[2]})`
            }}
          />
          <div className="back" style={{ backgroundPositionX: "-400px" }} />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[3]})`
            }}
          />
          <div className="back" style={{ backgroundPositionX: "-600px" }} />
        </div>
      </div>

      <div className="row">
        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[4]})`
            }}
          />
          <div className="back" style={{ backgroundPositionY: "-200px" }} />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[5]})`
            }}
          />
          <div
            className="back"
            style={{ backgroundPosition: "-200px -200px" }}
          />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[6]})`
            }}
          />
          <div
            className="back"
            style={{ backgroundPosition: "-400px -200px" }}
          />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[7]})`
            }}
          />
          <div
            className="back"
            style={{ backgroundPosition: "-600px -200px" }}
          />
        </div>
      </div>

      <div className="row">
        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[8]})`
            }}
          />
          <div className="back" style={{ backgroundPositionY: "-400px" }} />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[9]})`
            }}
          />
          <div
            className="back"
            style={{ backgroundPosition: "-200px -400px" }}
          />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[10]})`
            }}
          />
          <div
            className="back"
            style={{ backgroundPosition: "-400px -400px" }}
          />
        </div>

        <div className="card">
          <div
            className="front img"
            style={{
              backgroundImage: `url(${doggoImages[11]})`
            }}
          />
          <div
            className="back"
            style={{ backgroundPosition: "-600px -400px" }}
          />
        </div>
      </div>
    </main>
  );
};

export default DoggoSquare;
