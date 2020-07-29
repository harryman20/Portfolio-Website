import React from 'react';
import PropTypes from 'prop-types';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-content5').style.display = "block";
  document.getElementById('card-wrapper5').style.filter = "grayscale(50%)";
}

var hideContent = () => {
  document.getElementById('card-content5').style.display = "none";
  document.getElementById('card-wrapper5').style.filter = "grayscale(50%)";
}

export default function ProjectCard5(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper5" className="card-wrapper5">
      <div id="card-title5">
        <h2>{props.name}</h2>
      </div>
      <div className="card-content5" id="card-content5">
        <h3>{props.body}</h3>
        <h4>{props.image}</h4>
        <button>{props.footer}</button>
      </div>
    </div>
  );
}
