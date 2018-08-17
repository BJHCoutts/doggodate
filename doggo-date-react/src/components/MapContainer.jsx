//AIzaSyB9MlVMZxHnie4R24XY9rLGyLad3BjN_aU
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const mapElement = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    return (
      <Map style={{ mapElement }} google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>this.state.selectedPlace.name</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9MlVMZxHnie4R24XY9rLGyLad3BjN_aU"
})(MapContainer);
