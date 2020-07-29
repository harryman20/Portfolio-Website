import React from 'react';
import PropTypes from 'prop-types';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-content3').style.display = "block";
  document.getElementById('card-wrapper3').style.filter = "grayscale(50%)";
}

var hideContent = () => {
  document.getElementById('card-content3').style.display = "none";
  document.getElementById('card-wrapper3').style.filter = "grayscale(0%)";
}

export default function ProjectCard3(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper3" className="card-wrapper3">
      <div id="card-title3">
        <h2>{props.name}</h2>
      </div>
      <div className="card-content3" id="card-content3">
        <h3>{props.body}</h3>
        <h4>{props.image}</h4>
        <button>{props.footer}</button>
      </div>
    </div>
  );
}
