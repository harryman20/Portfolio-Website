import React from 'react';
import '../Projects.css';

var showContent = () => {
  document.getElementById('card-wrapper2').style.filter = "grayscale(50%)";

  const test2 = document.getElementById('card-wrapper2');
  test2.style.height = '20em';

  const card2 = document.getElementById('card-content2');
  card2.style.opacity = '1';
}

var hideContent = () => {
  document.getElementById('card-wrapper2').style.filter = "grayscale(0%)";

  const test2 = document.getElementById('card-wrapper2');
  test2.style.height = '2em';

  const card2 = document.getElementById('card-content2');
  card2.style.opacity = '0';
}

export default function ProjectCard2(props) {
  return (
    <div onMouseEnter={showContent} onMouseLeave={hideContent} id="card-wrapper2" className="card-wrapper2">
      <div id="card-title2">
        <h2>{props.name}</h2>
      </div>
      <div className="card-content2" id="card-content2">
        <h3>{props.body}</h3>
        <button>{props.footer}</button>
      </div>
    </div>
  );
}
