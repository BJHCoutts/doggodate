import React, { Component } from "react";
import Doggo from "../requests/doggo";
import DoggoDetails from "./DoggoDetails";
import "../style/doggoShowPage.css";

class DoggoShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      doggo: undefined
    };
  }

  componentDidMount() {
    console.log("Hello World");
    console.log(this.props);
    const doggoId = this.props.match.params.id;

    Doggo.one(doggoId).then(doggo => {
      console.log(doggo);

      this.setState({
        loading: false,
        doggo: doggo
      });
    });
  }

  render() {
    const { loading, doggo } = this.state;

    if (loading) {
      return (
        <main>
          <h2>Loading Doggo...</h2>
        </main>
      );
    }

    if (!doggo) {
      return (
        <main>
          <h2>Doggo is in another castle!</h2>
        </main>
      );
    }

    return (
      <main className="doggo-show-page__container">
        <h2>The Doggo Show</h2>
        <DoggoDetails {...doggo} />
        <br />
        <button>Send this Doggo to the Farm</button>
      </main>
    );
  }
}

export default DoggoShowPage;
