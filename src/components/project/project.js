import React from 'react';
import Image from 'gatsby-image';
import ProjectLinks from './project-links';
import styled from 'styled-components';

import './project.scss';

function Project(props) {
  Project.defaultProps = {
    githubBackEnd: null,
  };

  return (
    <>
      <div className="project">
        <ProjectLinks
          github={props.github}
          githubBackEnd={props.githubBackEnd}
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
            {props.info && <Info>{props.info}</Info>}
          </div>

          <ProjectLinks
            github={props.github}
            githubBackEnd={props.githubBackEnd}
            demo={props.demo}
            viewport={'large'}
          />
        </div>
      </div>
    </>
  );
}

const Info = styled.p`
  margin-top: 1rem;
  background-color: #d9edf7;
  border-color: #bcdff1;
  color: #31708f;

  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 0.3rem;
`;

export default Project;
