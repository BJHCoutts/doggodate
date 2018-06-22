import React, { Component } from "react";
import DoggoSingle from "./DoggoSingle";

class AllDoggos extends Component {
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
      <div className="Doggos">
        <h2>{doggoSingles}</h2>
      </div>
    );
  }
}

//validation

// AllDoggos.propTypes = {
//   doggos: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// };

export default AllDoggos;
