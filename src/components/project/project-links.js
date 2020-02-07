import React, { Fragment } from 'react';
import { GoMarkGithub as GithubIcon } from 'react-icons/go';
import { FaLink } from 'react-icons/fa';

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
          <span>Source Code</span>
        </div>
      </a>

      {props.demo && (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  );
}

export default ProjectLinks;
