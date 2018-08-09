import React, { Component } from "react";
import Doggo from "../requests/doggo";
import { Link } from "react-router-dom";

class DoggoIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doggos: []
    };
  }

  componentDidMount() {
    Doggo.all().then(doggos => {
      this.setState({
        doggos: doggos
      });
    });
  }

  render() {
    const { doggos } = this.state;

    return (
      <main>
        <h1>Doggos</h1>
        <ul style={{ padding: 0, listStyle: "none" }}>
          {doggos.map((doggo, index) => (
            <li style={{ marginBottom: "1rem" }} key={doggo.id}>
              <span>{new Date(doggo.created_at).toLocaleDateString()}</span>
              {" â¢Â "}
              <Link to={`/doggos/${doggo.id}`}>{doggo.name}</Link>
              <br />
              {/*
              document
                .querySelector("button")
                .addEventListener("click", () => console.log("Button clicked!"))
              */}
              {/* <button onClick={e => console.log(e.target, "was clicked!")}> */}
              {/* <button data-id={doggo.id} onClick={this.deleteQuestion}>
                Delete
              </button> */}
            </li>
          ))}
        </ul>
        <ul>{doggos.map((doggo, index) => <li key={doggo.id} />)}</ul>
      </main>
    );
  }
}

export default DoggoIndexPage;
