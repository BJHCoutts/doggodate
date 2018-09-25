import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"; //InfoWindow,

import { KEY } from "../requests/apikey";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%", position: "relative" }}
          zoom={11.5}
          initialCenter={{
            lat: 49.25,
            lng: -123.12
          }}
        >
          {/* make only load if user is present  */}

          {this.props.currentUser ? (
            <Marker
              title={"User Location"}
              name={"User Location"}
              position={{
                lat: this.props.currentUser.latitude,
                lng: this.props.currentUser.longitude
              }}
            />
          ) : (
            <div />
          )}
          <Marker
            title={"Sun Yat Sen"}
            name={"Sun Yat Sen"}
            position={{ lat: 49.2798, lng: -123.1041 }}
          />
          <Marker
            title={"Crab Park"}
            name={"Crab Park"}
            position={{ lat: 49.2851, lng: -123.1028 }}
          />
          <Marker
            title={"Deer Lake"}
            name={"Deer Lake"}
            position={{ lat: 49.2356, lng: -122.9795 }}
          />
          <Marker
            title={"Dude Chilling"}
            name={"Dude Chilling"}
            position={{ lat: 49.2641, lng: -123.0964 }}
          />
          <Marker
            title={"Hinge Park"}
            name={"Hinge Park"}
            position={{ lat: 49.2713, lng: -123.1101 }}
          />
          <Marker
            title={"Jericho"}
            name={"Jericho"}
            position={{ lat: 49.2722, lng: -123.1985 }}
          />
          <Marker
            title={"Jonathan Rogers"}
            name={"Jonathan Rogers"}
            position={{ lat: 49.2643, lng: -123.108 }}
          />
          <Marker
            title={"Kits Beach"}
            name={"Kits Beach"}
            position={{ lat: 49.274, lng: -123.1546 }}
          />
          <Marker
            title={"Lighthouse Park"}
            name={"Lighthouse Park"}
            position={{ lat: 49.3316, lng: -123.2636 }}
          />
          <Marker
            title={"Pacific Spirit"}
            name={"Pacific Spirit"}
            position={{ lat: 49.2533, lng: -123.2156 }}
          />
          <Marker
            title={"Queen Elizabeth"}
            name={"Queen Elizabeth"}
            position={{ lat: 49.2418, lng: -123.1126 }}
          />
          <Marker
            title={"Robson Square"}
            name={"Robson Square"}
            position={{ lat: 49.246292, lng: -123.116226 }}
          />
          <Marker
            title={"Stanley Park"}
            name={"Stanley Park"}
            position={{ lat: 49.3043, lng: -123.1443 }}
          />
          <Marker
            title={"Trout Lake"}
            name={"Trout Lake"}
            position={{ lat: 49.2572, lng: -123.0649 }}
          />
          <Marker
            title={"Van Dusen"}
            name={"Van Dusen"}
            position={{ lat: 49.2386, lng: -123.1287 }}
          />
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY
})(MapContainer);
