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

    this.destroyDoggo = this.destroyDoggo.bind(this);
  }

  componentDidMount() {
    this.loadPage();
  }

  componentDidUpdate() {
    this.loadPage();
  }

  loadPage = () => {
    const doggoId = this.props.match.params.id;
    Doggo.one(doggoId).then(doggo => {
      this.setState({
        loading: false,
        doggo: doggo
      });
    });
  };

  destroyDoggo() {
    const doggoId = this.props.match.params.id;
    Doggo.destroy(doggoId).then(this.props.history.push(`/`));
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
        <DoggoDetails {...doggo} style={{ margin: 0 }} />
        <button onClick={this.destroyDoggo} style={{ margin: "0 0 0 2em" }}>
          Send this Doggo to the Farm
        </button>
      </main>
    );
  }
}

export default DoggoShowPage;
