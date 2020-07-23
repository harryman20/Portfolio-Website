import React, { Component } from "react";
import "./Home.css";
import "./NavBar.css";

class Home extends Component {
  render() {
    return (
      <div class="homeContainer">
        <h1 className="headText">Hello! My name is Harrison.</h1>
        <h2 className="lowerText">I am a Web Developer/ Web Designer.</h2>
        <button>Learn More!</button>
      </div>
    );
  }
}

export default Home;
