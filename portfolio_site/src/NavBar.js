import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import './Main.css';

class NavBar extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
      </HashRouter>
    );
  }
}

export default NavBar;
