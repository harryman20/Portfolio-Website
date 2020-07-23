import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <div>
            <div className="mainNav">
              <NavBar />
            </div>
            <div className="content">
              <Content />
             </div>
           </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
