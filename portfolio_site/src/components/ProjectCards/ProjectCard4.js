import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-content4').style.display = "block";
  document.getElementById('card-wrapper4').style.filter = "grayscale(50%)";
}

var hideContent = () => {
  document.getElementById('card-content4').style.display = "none";
  document.getElementById('card-wrapper4').style.filter = "grayscale(0%)";
}

export default function ProjectCard4(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper4" className="card-wrapper4">
      <div id="card-title4">
        <h2>{props.name}</h2>
      </div>
      <div className="card-content4" id="card-content4">
        <h3>{props.body}</h3>
        <h4>{props.image}</h4>
        <button>{props.footer}</button>
      </div>
    </div>
  );
}
