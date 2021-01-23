import React, { useEffect } from "react";

import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";
import axios from "axios";

//redux import

//actions

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then((res) => {
      console.log("useEffect:", res.data);
    });
  });

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">Smurf Village Database</a>
      </nav>
      <main>
        <AddForm />
        <SmurfDisplay />
      </main>
    </div>
  );
};

export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
