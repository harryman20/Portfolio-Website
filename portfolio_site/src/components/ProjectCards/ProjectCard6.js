import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-wrapper6').style.filter = "grayscale(50%)";

  const test6 = document.getElementById('card-wrapper6');
  test6.style.height = '15em';

  const card6 = document.getElementById('card-content6');
  card6.style.opacity = '1';
}

var hideContent = () => {
  document.getElementById('card-wrapper6').style.filter = "grayscale(0%)";

  const test6 = document.getElementById('card-wrapper6');
  test6.style.height = '2em';

  const card6 = document.getElementById('card-content6');
  card6.style.opacity = '0';
}

export default function ProjectCard6(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper6" className="card-wrapper6">
      <div id="card-title6">
        <h2 id="cardHeader">{props.name}</h2>
      </div>
      <div className="card-content6" id="card-content6">
        <h3 id="cardBody">{props.body}</h3>
        <button id="cardButton" className="cardButton">See More!</button>
      </div>
    </div>
  );
}
