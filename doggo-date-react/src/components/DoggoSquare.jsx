import React from "react";
import "../style/doggoSquare.css";
import doggoImages from "../requests/doggoImages.js";

document.addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(node => {
    node.classList.toggle("flipped");
  });
});

const DoggoSquare = () => {
  return (
    <main className="container">

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
