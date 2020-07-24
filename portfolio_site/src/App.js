import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
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
