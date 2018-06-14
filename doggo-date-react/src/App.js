import React, { Component } from "react";
import "./App.css";
import Doggos from "./components/Doggos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      doggos: [
        {
          name: "Dogname",
          breed: "Dogbreed",
          sound: "Dogsound",
          meme_phrase: "Dogmeme_phrase",
          age: "Dogage",
          gender: "Doggender",
          coat_length: "Dogcoat_length",
          size: "Dogsize"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Doggo Date</h1>
        <Doggos doggos={this.state.doggos} />
      </div>
    );
  }
}

export default App;
