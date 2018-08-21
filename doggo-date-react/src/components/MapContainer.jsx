import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%", position: "relative" }}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
        zoom={15}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9MlVMZxHnie4R24XY9rLGyLad3BjN_aU"
})(MapContainer);
