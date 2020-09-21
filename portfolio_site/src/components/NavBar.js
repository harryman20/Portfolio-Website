import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import pfp from "./DSC_2722.jpg";

class NavBar extends Component {
  render(){
    function blurBackgroundStart() {
      const test = document.getElementById('test');
      test.style.opacity = '1';

      const headerHide = document.getElementById('headText');
      headerHide.style.opacity = '0';

      const lowerHide = document.getElementById('lowerText');
      lowerHide.style.opacity = '0';

      const moreButton = document.getElementById('moreButton');
      moreButton.style.opacity = '0';
    }

    function blurBackgroundEnd() {
      const test = document.getElementById('test');
      test.style.opacity = '0';

      const headerHide = document.getElementById('headText');
      headerHide.style.opacity = '1';

      const lowerHide = document.getElementById('lowerText');
      lowerHide.style.opacity = '1';

      const moreButton = document.getElementById('moreButton');
      moreButton.style.opacity = '1';
    }
    return (
     <div className="nav">
      <nav>
        <ul id="navbar">
          <img className="navPic"
          onMouseEnter={blurBackgroundStart}
          onMouseLeave={blurBackgroundEnd}
          src={pfp} alt="Logo" />
          <div className="rightNav">
            <li className="navLi"><Link id="NavHome" to="/">Home</Link></li>
            <li className="navLi"><Link id="NavProject" to="/projects">Projects</Link></li>
            <li className="navLi"><Link id="NavAbout" to="/about">Who I Am!</Link></li>
            <li className="navLi"><Link id="NavContact" to="/contact">Contact</Link></li>
          </div>
        </ul>
      </nav>
     </div>
    );
  }
}

export default NavBar;
