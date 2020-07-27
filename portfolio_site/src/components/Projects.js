import React from 'react';
import data from './ProjectData';
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <div className="wrapper">
      <h1>Projects</h1>
      {data.map(project => (
        <ProjectCard
          key={project.name}
          name={project.name}
          body={project.body}
          image={project.image}
          footer={project.footer}/>
      ))}
    </div>
  )
}

export default Project;
