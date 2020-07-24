import React, { Component } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/projects" component={Projects} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
