import React, { Component } from "react";

class AddDoggo extends Component {
  constructor() {
    super();
    this.state = {
      newDoggo: {}
    };
  }

  static defaultProps = {
    categories: ["platonic", "love"]
  };

  handleSubmit(e) {
    if (this.refs.name.value === "") {
      alert("All Doggos must have names");
    } else {
      this.setState(
        {
          newDoggo: {
            name: this.refs.name.value,
            breed: this.refs.breed.value,
            sound: this.refs.sound.value,
            meme_phrase: this.refs.meme_phrase.value,
            age: this.refs.age.value,
            gender: this.refs.gender.value,
            coat_length: this.refs.coat_length.value,
            size: this.refs.size.value,
            category: this.refs.category.value
          }
        },
        function() {
          this.props.addDoggo(this.state.newDoggo);
        }
      );
    }

    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h2>Add Doggo</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label>
            <input type="text" ref="name" />
          </div>
          <div>
            <label>Breed</label>
            <input type="text" ref="breed" />
          </div>
          <div>
            <label>Sound</label>
            <input type="text" ref="sound" />
          </div>
          <div>
            <label>Meme Phrase</label>
            <input type="text" ref="meme_phrase" />
          </div>
          <div>
            <label>Age</label>
            <input type="text" ref="age" />
          </div>
          <div>
            <label>Gender</label>
            <input type="text" ref="gender" />
          </div>
          <div>
            <label>Hair Style</label>
            <input type="text" ref="coat_length" />
          </div>
          <div>
            <label>Size</label>
            <input type="text" ref="size" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

//validation

// AddDoggo.propTypes = {
//   categories: React.PropTypes.array,
//   addDoggo: React.PropTypes.func
// };

export default AddDoggo;
