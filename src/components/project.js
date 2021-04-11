import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import { GoMarkGithub as GithubIcon } from 'react-icons/go';
import { FaLink } from 'react-icons/fa';

function Project(props) {
  Project.defaultProps = {
    githubBackEnd: null,
  };

  return (
    <StyledProject className="project">
      <ProjectLinks
        github={props.github}
        githubBackEnd={props.githubBackEnd}
        demo={props.demo}
        viewport={'small'}
      />
      <GatsbyImage
        image={props.image}
        className="screenshot"
        alt={`${props.name} Screen Shot`} />
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
    </StyledProject>
  );
}

const StyledProject = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
  padding-bottom: 70px;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  a {
    border-bottom: none;

    &:hover {
      color: $primary-darken;
      border-bottom: none;
      text-decoration: none;
    }
  }

  @media (max-width: 860px) {
    justify-content: space-between;
  }

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 40px;
    padding-bottom: 40px;
  }

  &:nth-of-type(even) {
    @media (min-width: 761px) {
      flex-direction: row-reverse;
    }
  }

  .title {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .screenshot {
    margin-right: 20px;

    @media (max-width: 760px) {
      margin-right: 0;
      margin-bottom: 25px;
    }
  }

  .links {
    display: flex;
    align-items: center;

    &--below-tablet {
      @media (min-width: 760px) {
        display: none;
      }
    }

    &--tablet-up {
      margin-top: 20px;
      @media (max-width: 759px) {
        display: none;
      }
    }

    span {
      font-size: 16px;
    }
  }

  .gh-icon {
    margin-right: 5px;
  }

  .link-icon,
  .gh-icon-be {
    margin-right: 5px;
    margin-left: 15px;
  }

  .info {
    max-width: 440px;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 18px;
      margin-bottom: 0;

      @media (max-width: 760px) {
        margin-bottom: 30px;
      }
    }

    @media (max-width: 880px) {
      max-width: 400px;
    }

    @media (max-width: 760px) {
      width: 100%;
      max-width: 100%;
    }
  }
`;

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

function ProjectLinks(props) {
  let className =
    props.viewport === 'small' ? 'links--below-tablet' : 'links--tablet-up';

  return (
    <div style={{ display: 'flex' }}>
      <a
        href={props.github}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="links">
          <GithubIcon size={20} className="gh-icon" />
          {props.githubBackEnd ? (
            <span>FE Source</span>
          ) : (
            <span>Source Code</span>
          )}
        </div>
      </a>

      {props.githubBackEnd && (
        <a
          href={props.githubBackEnd}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="links">
            <GithubIcon size={20} className="gh-icon-be" />
            <span>BE Source</span>
          </div>
        </a>
      )}

      {props.demo && (
        <>
          <a
            href={props.demo}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links">
              <FaLink size={20} className="link-icon" />
              <span>Live Demo</span>
            </div>
          </a>
        </>
      )}
    </div>
  );
}

export default Project;
