import React from "react";

const DoggoDetails = props => {
  return (
    <div>
      <p>{props.name}</p>
      <div
        className="index__doggo_img"
        style={{
          backgroundImage: `url(${props.image})`
        }}
      />
      <p>{props.image}</p>
      <img src={props.image} />
      <p>{props.breed}</p>
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
