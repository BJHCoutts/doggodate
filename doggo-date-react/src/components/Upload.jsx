import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="upload preview" />;
    }

    return (
      <section>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>
            Upload Image
          </button>
        </form>
        {$imagePreview}
      </section>
    );
  }
}

// class Upload extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       file: null
//     };

//     this.handleChange.bind = this.handleChange.bind(this);
//   }

//   handleChange = e => {
//     this.setState({
//       file: URL.createObjectURL.URL(e.target.files[0])
//     });
//   };

//   render() {
//     return (
//       <div>
//         <img src={this.state.file} />
//         <input type="file" onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

export default Upload;
