import React, { Component } from "react";
import Doggo from "../requests/doggo";
import DoggoAddForm from "./DoggoAddForm";
import DoggoSingle from "./DoggoSingle";

class DoggoAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validationErrors: []
    };

    this.createDoggo = this.createDoggo.bind(this);
  }

  // deleteDoggo(id) {
  //   this.props.onDelete(id);
  // }

  createDoggo(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    Doggo.create({
      name: formData.get("name"),
      breed: formData.get("breed"),
      sound: formData.get("sound"),
      meme_phrase: formData.get("meme_phrase"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      coat_length: formData.get("coat_length"),
      size: formData.get("size"),
      category: formData.get("category")
    }).then(data => {
      const doggoId = data.id;
      this.props.history.push(`/doggos/${doggoId}`);
    });
  }

  render() {
    // let doggoSingles;
    // if (this.props.doggos) {
    //   doggoSingles = this.props.doggos.map(doggo => {
    //     // console.log(doggo);
    //     return <DoggoSingle key={doggo.name} doggo={doggo} />;
    //   });
    // }
    // console.log(this.props);
    // let categoryOptions = this.props.categories.map(category => {
    //   return (
    //     <option key={category} value={category}>
    //       {category}
    //     </option>
    //   );
    // });

    return (
      <div className="content">
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
          {/* <div>
            <label>Category</label>
            <select ref="category">{categoryOptions}</select>
          </div> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

//validation

// AllDoggos.propTypes = {
//   doggos: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// };

export default DoggoAdd;
