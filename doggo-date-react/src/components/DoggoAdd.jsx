import React, { Component } from "react";
import DoggoAddForm from "./DoggoAddForm";
import DoggoSingle from "./DoggoSingle";

class DoggoAdd extends Component {
  deleteDoggo(id) {
    this.props.onDelete(id);
  }
  render() {
    let doggoSingles;
    if (this.props.doggos) {
      doggoSingles = this.props.doggos.map(doggo => {
        // console.log(doggo);
        return <DoggoSingle key={doggo.name} doggo={doggo} />;
      });
    }
    // console.log(this.props);
    return (
      <React.Fragment>
        <DoggoAddForm />
      </React.Fragment>
    );
  }
}

//validation

// AllDoggos.propTypes = {
//   doggos: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// };

export default DoggoAdd;
