import React, { useEffect } from "react";
import Smurf from "./Smurf";

//redux import
import { connect } from "react-redux";

//actions
import { getSmurfAction } from "../actions";

const SmurfDisplay = (error, isFetching, info, dispatch, getSmurfAction) => {
  useEffect(() => {
    getSmurfAction("http:/localhost:3333/smurfs");
  }, [getSmurfAction, "http:/localhost:3333/smurfs"]);

  console.log("error:", error);
  if (error) {
    return <h2>We got an error</h2>;
  } else if (isFetching) {
    return <h2>Fetching Smurfies</h2>;
  } else
    return (
      <div>
        <Smurf />
      </div>
    );
};

// export default SmurfDisplay;

export default connect(null, { getSmurfAction })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
