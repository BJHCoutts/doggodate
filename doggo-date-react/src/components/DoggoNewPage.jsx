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
      category: formData.get("category"),
      park: formData.get("park")
    }).then(data => {
      if (data.status === 422) {
        this.setState({
          validationErrors: data.errors
        });
      } else {
        const doggoId = data.id;
        this.props.history.push(`/doggo/index/${doggoId}`);
      }
    });
    event.preventDefault();
  }

  render() {
    const { validationErrors } = this.state;

    return (
      <main>
        <div className="doggo-new-page__container">
          {/* <p>{validationErrors.map(e => `${e.field} ${e.message}`).join(", ")}</p> */}
          <form
            onSubmit={this.createDoggo}
            className="doggo-new-page__container_form"
          >
            <h2 style={{ margin: "0 0 1.5em 0" }}>Add a Doggo!</h2>
            <div>
              <label htmlFor="name">Name</label> <br />
              {/* <FormErrors forField="title" errors={validationErrors} /> */}
              <input name="name" id="name" />
            </div>
            <div>
              <label>Breed</label> <br />
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
              <label>Please pick your favourite park!</label> <br />
              <select name="park" id="park">
                <option value="Crab Park">Crab Park</option>
                <option value="Deer Lake">Deer Lake</option>
                <option value="Dude Chilling">Dude Chilling</option>
                <option value="Hinge Park">Hinge Park</option>
                <option value="Jericho">Jericho</option>
                <option value="Jonathon Rogers">Jonathon Rogers</option>
                <option value="Kits Beach">Kits Beach</option>
                <option value="Lighthouse Park">Lighthouse Park</option>
                <option value="Pacific Spirit">Pacific Spirit</option>
                <option value="Queen Elizabeth">Queen Elizabeth</option>
                <option value="Robson Square">Robson Square</option>
                <option value="Stanley Park">Stanley Park</option>
                <option value="Sun Yat Sen">Sun Yat Sen</option>
                <option value="Trout Lake">Trout Lake</option>
                <option value="Van Dusen">Van Dusen</option>
              </select>
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div style={{ margin: "0 0 0 1em" }}>
            <Upload />
          </div>
        </div>
      </main>
    );
  }
}

export default DoggoNewPage;
