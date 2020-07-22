import React from "react";
import {
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
   <div className="sidebar">
    <ul id="navbar">
      <li><Link id="NavHome" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
      <li><Link id="NavAbout" to="/about" style={{ textDecoration: 'none' }}>About</Link></li>
      <li><Link id="NavContact" to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
    </ul>
   </div>
  );
}

export default NavBar;
