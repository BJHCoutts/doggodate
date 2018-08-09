import React, { Component } from "react";

import DoggosAll from "./DoggosAll";
import AddDoggo from "./AddDoggo";

class DoggosList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      doggos: [
        {
          name: "Dogname1",
          breed: "Dogbreed1",
          sound: "Dogsound1",
          meme_phrase: "Dogmeme_phrase1",
          age: "Dogage1",
          gender: "Doggender1",
          coat_length: "Dogcoat_length1",
          size: "Dogsize1",
          category: "platonic"
        },
        {
          name: "Dogname2",
          breed: "Dogbreed2",
          sound: "Dogsound2",
          meme_phrase: "Dogmeme_phrase2",
          age: "Dogage2",
          gender: "Doggender2",
          coat_length: "Dogcoat_length2",
          size: "Dogsize2",
          category: "platonic"
        }
      ]
    });
  }

  handleAddDoggo(doggo) {
    let doggos = this.state.doggos;
    doggos.push(doggo);
    this.setState({ doggos: doggos });
  }

  // handleDeleteDoggo(doggo) {
  //   let doggos = this.state.doggos;
  //   let index = doggos.findIndex(x => x.id === id);
  //   doggos.splice(index, 1);
  //   this.setState({ doggos: doggos });
  // }

  render() {
    return (
      <div className="App">
        <h1>Doggo Date</h1>
        <div className="baseDiv">
          <AddDoggo addDoggo={this.handleAddDoggo.bind(this)} />
        </div>
        <br />
        <DoggosAll doggos={this.state.doggos} />
      </div>
    );
  }
}

export default DoggosList;
