import React from "react";
import "../style/doggoShowPage.css";

const DoggoDetails = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      {/* <div
        className="index__doggo_img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${props.image})`
        }}
      /> */}
      <p>{props.image}</p>
      <img />
      <p>Breed:</p>
      <p>{props.breed}</p>
      <p>Sound</p>
      <p>{props.sound}</p>
      <p>{props.meme_phrase}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
      <p>{props.coat_length}</p>
      <p>{props.size}</p>
      <p>{props.category}</p>
      <p>{props.user.first_name}</p>
      <p>{props.park}</p>
    </div>
  );
};

export default DoggoDetails;
