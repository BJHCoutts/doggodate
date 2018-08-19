import React, { Component } from "react";
import Doggo from "../requests/doggo";
import "../style/doggoIndexPage.css";
import { Link } from "react-router-dom";

//

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
      <main className="index__container_page">
        <h1>Doggos</h1>
        <ul style={{ padding: 0, listStyle: "none" }}>
          {doggos.map((doggo, index) => (
            <li className="index__doggo_card" key={doggo.id}>
              <div
                className="index__doggo_img"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${
                    doggo.image
                  })`
                }}
              />
              <div className="index__doggo_text">
                <a className="index__doggo_name">
                  <Link
                    className="index__doggo_name"
                    to={`/doggos/${doggo.id}`}
                    style={{ fontSize: "1.25em" }}
                  >
                    {doggo.name}
                  </Link>
                </a>
                <br />
                <div className="index__doggo_details">
                  <span style={{ fontSize: "1em" }}>"{doggo.meme_phrase}"</span>
                  <br />
                </div>
                <small>
                  Member since: <br />
                  {new Date(doggo.created_at).toLocaleString()}
                  <br />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default DoggoIndexPage;
