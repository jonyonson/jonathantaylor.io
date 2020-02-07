import React from 'react';
import Image from 'gatsby-image';
import ProjectLinks from './project-links';

import './project.scss';

function Project(props) {
  return (
    <div className="project">
      <ProjectLinks
        github={props.github}
        demo={props.demo}
        viewport={'small'}
      />
      <Image
        className="screenshot"
        fixed={props.image}
        alt={`${props.name} Screen Shot`}
      />
      <div className="info">
        <div>
          <h3 className="title">{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <ProjectLinks
          github={props.github}
          demo={props.demo}
          viewport={'large'}
        />
      </div>
    </div>
  );
}

export default Project;
