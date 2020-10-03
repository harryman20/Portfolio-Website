import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-wrapper3').style.filter = "grayscale(50%)";

  const test3 = document.getElementById('card-wrapper3');
  test3.style.height = '20em';

  const card3 = document.getElementById('card-content3');
  card3.style.opacity = '1';
}

var hideContent = () => {
  document.getElementById('card-wrapper3').style.filter = "grayscale(0%)";

  const test3 = document.getElementById('card-wrapper3');
  test3.style.height = '2em';

  const card3 = document.getElementById('card-content3');
  card3.style.opacity = '0';
}

export default function ProjectCard3(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper3" className="card-wrapper3">
      <div id="card-title3">
        <h2 id="cardHeader">{props.name}</h2>
      </div>
      <div className="card-content3" id="card-content3">
        <h3 id="cardBody">{props.body}</h3>
        <button id="cardButton" className="cardButton">See More!</button>
      </div>
    </div>
  );
}
