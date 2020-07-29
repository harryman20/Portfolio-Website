import React from 'react';
import PropTypes from 'prop-types';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-content1').style.display = "block";
  document.getElementById('card-wrapper1').style.filter = "grayscale(50%)";
}

var hideContent = () => {
  document.getElementById('card-content1').style.display = "none";
  document.getElementById('card-wrapper1').style.filter = "grayscale(0%)";
}

export default function ProjectCard1(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper1" className="card-wrapper1">
      <div id="card-title1">
        <h2>{props.name}</h2>
      </div>
      <div className="card-content1" id="card-content1">
        <h3>{props.body}</h3>
        <h4>{props.image}</h4>
        <button className="card-button1">{props.footer}</button>
      </div>
    </div>
  );
}
