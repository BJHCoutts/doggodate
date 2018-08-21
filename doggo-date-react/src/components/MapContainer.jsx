import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9MlVMZxHnie4R24XY9rLGyLad3BjN_aU"
})(MapContainer);
