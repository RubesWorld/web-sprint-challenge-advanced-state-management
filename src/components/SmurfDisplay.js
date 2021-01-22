import React from "react";
import Smurf from "./Smurf";

//redux import
import { connect } from "react-redux";

//actions
import { getSmurfAction } from "../actions";

export class SmurfDisplay extends React.Component {
  componentDidMount() {
    getSmurfAction();
  }
  if(error) {
    return <h2>We got an error</h2>;
  }
  else(isFetching) {
    return <h2>Fetching Smurfies</h2>;
  }
  else;
  render() {
    return (
      <div>
        <Smurf />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log("State:", state);
//   return {
//     info: state.data,
//     isFetching: state.isFetching,
//     error: state.error,
//   };
// };

export default SmurfDisplay;

// export default connect(mapStateToProps, { getSmurfAction })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
