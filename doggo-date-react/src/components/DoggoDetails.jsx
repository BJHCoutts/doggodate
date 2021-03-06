import React from "react";
import { Link, Redirect } from "react-router-dom";
import Match from "../requests/match.js";
import "../style/doggoDetails.css";

const DoggoDetails = props => {
  // function destroyRelationship() {
  //   const { id } = this.event.target;
  //   Match.destroy(id);
  // }
  // function destroyRelationship(id)

  return (
    <main>
      <div className="profile__doggo_img_container">
        <div className="profile__doggo_img_box ">
          <div
            className="profile__doggo_img_content"
            style={{
              backgroundImage: `url(../${props.image})`
            }}
          />
        </div>
      </div>

      <div className="doggo__details_container baseDiv">
        <h1>{props.name}</h1>
        <h2> "{props.meme_phrase}"</h2>
        <div className="doggo__details_container_info">
          <div className="col_one">
            <div className="doggo__display_text">Breed</div>
            <div className="doggo__body_text">{props.breed}</div>
            <div className="doggo__display_text">Sound</div>
            <div className="doggo__body_text">{props.sound}</div>
            <div className="doggo__display_text">Age</div>
            <div className="doggo__body_text">{props.age}</div>
            <div className="doggo__display_text">Gender</div>
            <div className="doggo__body_text">{props.gender}</div>
          </div>
          <div className="col_two">
            <div className="doggo__display_text">Coat Length</div>
            <div className="doggo__body_text">{props.coat_length}</div>
            <div className="doggo__display_text">Size</div>
            <div className="doggo__body_text">{props.size}</div>
            <div className="doggo__display_text">Category</div>
            <div className="doggo__body_text">{props.category}</div>
            <div className="doggo__display_text">Owner</div>
            <div className="doggo__body_text">{props.user.first_name}</div>
          </div>
        </div>

        <div className="doggo__display_text">Favourite Park</div>
        <div className="doggo__body_text">{props.park}</div>
      </div>

      <div className="baseDiv">
        <h2>Doggo Partners</h2>

        <div className="user__doggo_container">
          {props.friends.map((d, i) => (
            <div key={`${d.id}-${i}`} className="friend__single">
              <Link
                to={`./${d.id}`}
                // onClick={() => this.props.history.push(`./${d.id}`)}
              >
                <div
                  className="friend__image"
                  style={{
                    backgroundImage: `url(../${d.image})`
                  }}
                />
              </Link>
              <Link
                to={`./${d.id}`}
                className="link"
                // onClick={() => handleRedirect(d.id)}
              >
                {d.name}
              </Link>
              {/* Termination Id */}
              {/* {props.matches.id} */}
              {props.matches.filter(m => m.friend_id === d.id).map(m => (
                <p
                  key={m.id}
                  onClick={() => {
                    Match.destroy(m.id);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Doggo Dump
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DoggoDetails;
