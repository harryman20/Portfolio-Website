import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-content6').style.display = "block";
  document.getElementById('card-wrapper6').style.filter = "grayscale(50%)";
}

var hideContent = () => {
  document.getElementById('card-content6').style.display = "none";
  document.getElementById('card-wrapper6').style.filter = "grayscale(50%)";
}

export default function ProjectCard6(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper6" className="card-wrapper6">
      <div id="card-title6">
        <h2>{props.name}</h2>
      </div>
      <div className="card-content6" id="card-content6">
        <h3>{props.body}</h3>
        <h4>{props.image}</h4>
        <button>{props.footer}</button>
      </div>
    </div>
  );
}
