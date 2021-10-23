import React from "react";
import ReactDOM from "react-dom";

import IndexedDbService from "./helpers/services/indexed-db";

import "semantic-ui-css/semantic.min.css";
import "./index.scss";

import App from "./views/App";
import Snow from "./components/Snow/Snow";

IndexedDbService.start();

ReactDOM.render(
  <>
    <img
      className="background-image"
      src="/images/background.jpg"
      alt="snowman"
    ></img>
    <img
      className="three-image"
      src="/images/three.png"
      alt="Christmas Three"
    ></img>
    <img
      className="fireplace-image"
      src="/images/fireplace.png"
      alt="Chimenea"
    ></img>

    <Snow />
    <App />
  </>,
  document.getElementById("root")
);
