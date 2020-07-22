import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from "./Contact";
import './App.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="mainNav">
          <BrowserRouter>
            <NavBar />
              <Switch>
               <Route path="/" component={Home} exact/>
               <Route path="/about" component={About}/>
               <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
             </Switch>
           </BrowserRouter>
         </div>
      </div>
    );
  }
}

export default Main;
