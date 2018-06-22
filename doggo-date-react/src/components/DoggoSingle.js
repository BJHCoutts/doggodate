import React, { Component } from "react";

class DoggoSingle extends Component {
  deleteDoggo(id) {
    console.log("OH NOOOS");
    this.props.onDelete(id);
  }

  render() {
    // console.log(this.props);
    return (
      <li className="Doggo">
        <strong>{this.props.doggo.name}</strong>
        <br />
        Breed: {this.props.doggo.breed}
        <br />
        Talkings: {this.props.doggo.sound}
        <br />
        About me: {this.props.doggo.meme_phrase}
        <br />
        Age: {this.props.doggo.age}
        <br />
        Gender: {this.props.doggo.gender}
        <br />
        Hair Style: {this.props.doggo.coat_length}
        <br />
        Body Type: {this.props.doggo.size}
        <br />
        What I want: {this.props.doggo.category}
        <br />
        <a href="" onClick={this.deleteDoggo.bind(this, this.props.doggo.id)}>
          XX
        </a>
        <br />
        <br />
      </li>
    );
  }
}

//validation

// DoggoSingle.propTypes = {
//   doggo: React.PropTypes.object,
//   onDelete: React.PropTypes.func
// };

export default DoggoSingle;
