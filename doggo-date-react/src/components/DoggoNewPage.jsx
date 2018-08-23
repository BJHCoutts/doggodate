import React, { Component } from "react";
import Doggo from "../requests/doggo";
import Upload from "./Upload";
import "../style/doggoNewPage.css";
// import FormErrors from "./FormErrors";

class DoggoNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validationErrors: []
    };

    this.createDoggo = this.createDoggo.bind(this);
  }

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
      // debugger;

      if (data.status === 422) {
        this.setState({
          validationErrors: data.errors
        });
      } else {
        const doggoId = data.id;
        this.props.history.push(`/doggos/${doggoId}`);
      }
    });
  }

  render() {
    const { validationErrors } = this.state;

    return (
      <main className="doggo-new-page__container">
        <div className="doggo-new-page__container_form">
          <h2 style={{ margin: "0 0 1.5em 0" }}>Add a Doggo!</h2>
          {/* <p>{validationErrors.map(e => `${e.field} ${e.message}`).join(", ")}</p> */}
          <form onSubmit={this.createDoggo}>
            <div>
              <label htmlFor="name">Name</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="name" id="name" />
            </div>
            <div>
              <label htmlFor="breed">Breed</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="breed" id="breed" />
            </div>
            <div>
              <label htmlFor="sound">Sound</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="sound" id="sound" />
            </div>
            <div>
              <label htmlFor="meme_phrase">Meme Phrase</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="meme_phrase" id="meme_phrase" />
            </div>
            <div>
              <label htmlFor="age">Age</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="age" id="age" />
            </div>
            <div>
              <label htmlFor="gender">Gender</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="gender" id="gender" />
            </div>
            <div>
              <label htmlFor="coat_length">Coat Length</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="coat_length" id="coat_length" />
            </div>
            <div>
              <label htmlFor="size">Size</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="size" id="size" />
            </div>
            <div>
              <label htmlFor="category">Category</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="category" id="category" />
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div style={{ margin: "0 0 0 1em" }}>
          <Upload />
        </div>
      </main>
    );
  }
}

export default DoggoNewPage;
