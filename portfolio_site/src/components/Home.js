import React, { Component } from "react";
import "./Home.css";
import "./NavBar.css";

class Home extends Component {
  render() {
    function blurBackgroundStart() {
      document.getElementById('hiddenElement').style.background = "rgba(0, 0, 0, 0.02)";
    }

    function blurBackgroundEnd() {
      document.getElementById('hiddenElement').style.background = "rgba(255, 255, 255, 0.0)";
    }

    return (
      <div id="hiddenElement">
        <div className="homeContainer">
          <h1 className="headText">Hello! My name is Harrison.</h1>
          <h2 className="lowerText">I am a Web Developer/ Web Designer.</h2>
          <button onMouseEnter={blurBackgroundStart}
                  onMouseLeave={blurBackgroundEnd}>Learn More!</button>
        </div>
      </div>
    );
  }
}

export default Home;
