import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-wrapper5').style.filter = "grayscale(50%)";

  const test5 = document.getElementById('card-wrapper5');
  test5.style.height = '20em';

  const card5 = document.getElementById('card-content5');
  card5.style.opacity = '1';
}

var hideContent = () => {
  document.getElementById('card-wrapper5').style.filter = "grayscale(0%)";

  const test5 = document.getElementById('card-wrapper5');
  test5.style.height = '2em';

  const card5 = document.getElementById('card-content5');
  card5.style.opacity = '0';
}

export default function ProjectCard5(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper5" className="card-wrapper5">
      <div id="card-title5">
        <h2 id="cardHeader">{props.name}</h2>
      </div>
      <div className="card-content5" id="card-content5">
        <h3 id="cardBody">{props.body}</h3>
        <button id="cardButton" className="cardButton">See More!</button>
      </div>
    </div>
  );
}
