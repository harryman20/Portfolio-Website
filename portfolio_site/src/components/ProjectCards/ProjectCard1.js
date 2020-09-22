import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-wrapper1').style.filter = "grayscale(50%)";

  const test1 = document.getElementById('card-wrapper1');
  test1.style.height = '20em';

  const card1 = document.getElementById('card-content1');
  card1.style.opacity = '1';
}

var hideContent = () => {
  document.getElementById('card-wrapper1').style.filter = "grayscale(0%)";

  const test1 = document.getElementById('card-wrapper1');
  test1.style.height = '2em';

  const card1 = document.getElementById('card-content1');
  card1.style.opacity = '0';
}

export default function ProjectCard1(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper1" className="card-wrapper1">
      <div id="card-title1">
        <h2 id="card1Header">{props.name}</h2>
      </div>
      <div className="card-content1" id="card-content1">
        <h3 id="card1Body">{props.body}</h3>
        <button id="card1Button" className="card-button1">{props.footer}</button>
      </div>
    </div>
  );
}
