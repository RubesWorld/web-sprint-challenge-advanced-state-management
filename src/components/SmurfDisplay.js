import React, { useEffect } from "react";
import Smurf from "./Smurf";

//redux connect import. Used to bring state into components
import { connect } from "react-redux";

//actions. Used to make changes to state
import { getSmurfAction } from "../actions";

const SmurfDisplay = ({ getSmurfAction, isFetching, smurfs }) => {
  useEffect(() => {
    getSmurfAction();
  }, []);

  return (
    <div>
      {isFetching ? (
        <h2>Fetching Smurfies...</h2>
      ) : (
        smurfs.map((smurf) => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
  };
};

// export default SmurfDisplay;

export default connect(mapStateToProps, { getSmurfAction })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
