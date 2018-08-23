import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null
    };

    this.handleChange.bind = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL.URL(event.target.files[0])
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.file} />
        <input type="file" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Upload;
