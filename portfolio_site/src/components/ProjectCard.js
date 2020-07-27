import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css'

export default function ProjectCard({
    body,
    name,
    image,
    footer
  }) {
  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      <h3>{body}</h3>
      <h4>{image}</h4>
      <p>{footer}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired
}
