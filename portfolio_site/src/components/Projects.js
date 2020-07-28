import React from 'react';
import ProjectCard1 from './ProjectCards/ProjectCard1';
import ProjectCard2 from './ProjectCards/ProjectCard2';
import ProjectCard3 from './ProjectCards/ProjectCard3';
import ProjectCard4 from './ProjectCards/ProjectCard4';

function Project() {
  return (
    <div className="wrapper">
      <div id="rightTitle">
        <h1>My Projects</h1>
      </div>
      <div id="leftCards">
          <ProjectCard1
            key= '1'
            id='1'
            name='Project1'
            body='This project was a practise project where I designed a website for a vacuum company.'
            image='image'
            footer='footer' />
          <ProjectCard2
            key= '2'
            id='2'
            name='Project2'
            body='This project was a practise project where I designed a website for a vacuum company.'
            image='image'
            footer='footer' />
          <ProjectCard3
            key= '3'
            id='3'
            name='Project3'
            body='This project was a practise project where I designed a website for a vacuum company.'
            image='image'
            footer='footer' />
          <ProjectCard4
            key= '4'
            id='4'
            name='Project4'
            body='This project was a practise project where I designed a website for a vacuum company.'
            image='image'
            footer='footer' />
      </div>
    </div>
  )
}

export default Project;
