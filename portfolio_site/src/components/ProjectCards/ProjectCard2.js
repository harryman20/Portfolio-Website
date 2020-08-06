import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-content2').style.display = "block";
  document.getElementById('card-wrapper2').style.filter = "grayscale(50%)";
}

var hideContent = () => {
  document.getElementById('card-content2').style.display = "none";
  document.getElementById('card-wrapper2').style.filter = "grayscale(0%)";
}

export default function ProjectCard2(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper2" className="card-wrapper2">
      <div id="card-title2">
        <h2>{props.name}</h2>
      </div>
      <div className="card-content2" id="card-content2">
        <h3>{props.body}</h3>
        <h4>{props.image}</h4>
        <button>{props.footer}</button>
      </div>
    </div>
  );
}
