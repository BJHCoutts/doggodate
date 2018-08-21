import React, { Component } from "react";
import { MapContainer } from "./MapContainer";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const containerElement = {
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   justifyContent: "flex-end",
    //   alignItems: "center"
    // };

    return (
      <main>
        <h1>It's a Map</h1>
        <MapContainer />
      </main>
    );
  }
}

export default MapPage;
