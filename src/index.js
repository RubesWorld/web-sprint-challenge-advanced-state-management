import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import reducer
import smurfReducer from "./reducers";
//import redux things
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//import middleware
import thunk from "redux-thunk";

//import reducer

//create dummy reducer
// const reducer = () => {
//   return {
//     Title: "is a dummy",
//   };
// };

//create store
const store = createStore(smurfReducer, applyMiddleware(thunk));
console.log(store);

const { worker } = require("./mocks/browser");
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.
