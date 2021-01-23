import React from "react";

//import redux imports
import { connect } from "react-redux";

//action import
import { getSmurfAction } from "../actions";

const Smurf = ({ smurf }) => {
  return (
    <div data-testid="smurf" className="card">
      <div key={smurf.id}>
        <h1>{smurf.name}</h1>
        <h2>{smurf.position}</h2>
        <h3>{smurf.nickname}</h3>
        <p>{smurf.description}</p>
      </div>
    </div>
  );
};

export default connect(null, { getSmurfAction })(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
