import React from 'react';
import PropTypes from 'prop-types';
import '../Projects.css';

export default function ProjectCard3(props) {
  return (
    <div id="card-wrapper" className="card-wrapper">
      <div id="card-content">
        <h2>{props.name}</h2>
        <h3>{props.body}</h3>
        <h4>{props.image}</h4>
        <button>{props.footer}</button>
      </div>
    </div>
  );
}
