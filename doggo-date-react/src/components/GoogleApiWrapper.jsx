import { GoogleApiWrapper } from "google-maps-react";

// ...

export class MapContainer extends React.Component {}

export default GoogleApiWrapper({
  apiKey: AIzaSyB9MlVMZxHnie4R24XY9rLGyLad3BjN_aU
})(MapContainer);
