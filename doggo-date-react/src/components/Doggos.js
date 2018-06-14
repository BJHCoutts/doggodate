import React, { Component } from "react";

class Doggos extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>All the Doggos</h1>
      </div>
    );
  }
}

export default Doggos;
