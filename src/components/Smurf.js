import React from "react";

const dummyData = [
  {
    name: "Poppa Smurf",
    position: "Village Leader",
    nickname: "Pops",
    description:
      "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
  },
  {
    id: "JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
    name: "Smurfette",
    position: "Beautician",
    nickname: "Smurfette",
    description:
      "Smurfette's role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.",
  },
];

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;

    return (
      <div data-testid="smurf" className="card">
        {dummyData.map((display) => {
          return (
            <div key={display.id}>
              <h1>{display.name}</h1>
              <h2>{display.position}</h2>
              <h3>{dummyData.nickname}</h3>
              <p>{display.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
