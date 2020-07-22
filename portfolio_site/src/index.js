import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import NavBar from "./NavBar";

ReactDOM.render(
  <NavBar />,
  document.getElementById("navbar")
);

ReactDOM.render(
  <Main />,
  document.getElementById("root")
);
