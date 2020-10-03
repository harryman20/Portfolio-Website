import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-wrapper1').style.filter = "grayscale(50%)";

  const cardwrapper1 = document.getElementById('card-wrapper1');
  cardwrapper1.style.height = '20em';

  const card1 = document.getElementById('card-content1');
  card1.style.opacity = '1';
}

var hideContent = () => {
  document.getElementById('card-wrapper1').style.filter = "grayscale(0%)";

  const cardwrapper1 = document.getElementById('card-wrapper1');
  cardwrapper1.style.height = '2em';

  const card1 = document.getElementById('card-content1');
  card1.style.opacity = '0';
}

export default function ProjectCard1(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper1" className="card-wrapper1">
      <div id="card-title1">
        <h2 id="cardHeader">{props.name}</h2>
      </div>
      <div className="card-content1" id="card-content1">
        <h3 id="cardBody">{props.body}</h3>
        <button id="cardButton" className="cardButton">See More!</button>
      </div>
    </div>
  );
}
