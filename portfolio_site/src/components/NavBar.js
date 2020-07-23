import React, {Component} from "react";
import {
  Link
} from "react-router-dom";
import "./Home.css";
import pfp from "./face-placeholder.gif";

class NavBar extends Component {
  render(){
    return (
     <div className="sidebar">
      <ul id="navbar">
        <img className="navPic" src={pfp} alt="Logo" />
        <li><Link id="NavHome" to="/">Home</Link></li>
        <li><Link id="NavProject" to="/projects">Projects</Link></li>
        <li><Link id="NavAbout" to="/about">About</Link></li>
        <li><Link id="NavContact" to="/contact">Contact</Link></li>
      </ul>
     </div>
    );
  }
}

export default NavBar;
