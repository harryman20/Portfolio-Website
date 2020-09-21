import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import "./NavBar.css";

class Home extends Component {
  render() {
    return (
      <div id="hiddenElement">
        <div className="homeContainer">
          <h1 id="headText" className="headText">Hello! My name is Harrison.</h1>
          <h2 id="lowerText" className="lowerText">I am a Web Developer/ Web Designer.</h2>
          <Link to="/about"><button id="moreButton" className="moreButton">Learn More!</button></Link>
        </div>
        <div id="secretPopup">
          <p id="secretMessage">Secret Message</p>
        </div>
      </div>
    );
  }
}

export default Home;
