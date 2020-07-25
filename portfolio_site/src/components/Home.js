import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import "./NavBar.css";

class Home extends Component {
  render() {
    function blurBackgroundStart() {
      // document.getElementById('blur').style.background = "rgba(0, 0, 0, 0.1)";
      document.getElementById('blur').style.filter = "blur(2px)";
    }

    function blurBackgroundEnd() {
      // document.getElementById('blur').style.background = "rgba(255, 255, 255, 0.0)";
      document.getElementById('blur').style.filter = "blur(0px)";
    }
    return (
      <div id="hiddenElement">
        <div className="homeContainer">
          <h1 className="headText">Hello! My name is Harrison.</h1>
          <h2 className="lowerText">I am a Web Developer/ Web Designer.</h2>
          <Link to="/about"><button className="moreButton">Learn More!</button></Link>
          <button onMouseEnter={blurBackgroundStart}
                  onMouseLeave={blurBackgroundEnd}
                  className="funButton">Fun :)</button>
        </div>
      </div>
    );
  }
}

export default Home;
