import React from "react";
import "../style/doggoDetails.css";

const DoggoDetails = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <div
        className="profile__doggo_img"
        style={{
          backgroundImage: `url(../${props.image})`
        }}
      />
      <div>{props.image}</div>
      <div className="doggo__display_text">Breed:</div>
      <div className="doggo__body_text">{props.breed}</div>
      <div className="doggo__display_text">Sound</div>
      <div className="doggo__body_text">{props.sound}</div>
      <div className="doggo__display_text">Meme Phrase</div>
      <div className="doggo__body_text">"{props.meme_phrase}"</div>
      <div className="doggo__display_text">Age</div>
      <div className="doggo__body_text">{props.age}</div>
      <div className="doggo__display_text">Gender</div>
      <div className="doggo__body_text">{props.gender}</div>
      <div className="doggo__display_text">Coat Length</div>
      <div className="doggo__body_text">{props.coat_length}</div>
      <div className="doggo__display_text">Size</div>
      <div className="doggo__body_text">{props.size}</div>
      <div className="doggo__display_text">Category</div>
      <div className="doggo__body_text">{props.category}</div>
      <div className="doggo__display_text">Owner</div>
      <div className="doggo__body_text">{props.user.first_name}</div>
      <div className="doggo__display_text">Favourite Park</div>
      <div className="doggo__body_text">{props.park}</div>
    </div>
  );
};

export default DoggoDetails;
