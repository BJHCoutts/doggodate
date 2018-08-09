import React, { Component } from "react";
import Doggo from "../requests/doggo";
import { Link } from "react-router-dom";

class DoggoIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loading: true,
      doggos: []
    };

    // this.deleteDoggo = this.deleteDoggo.bind(this);
  }

  componentDidMount() {
    Doggo.all()
      .then(doggos => {
        this.setState({ loading: false, doggos: doggos });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    const { doggos } = this.state;

    // if (loading) {
    //   return (
    //     <main>
    //       <h1>Doggos dogging</h1>
    //     </main>
    //   );
    // }

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

// const { doggos } = this.state;

// this.setState({
//   doggos:doggos.filter(doggo => doggo.id !== doggoId)
// });
