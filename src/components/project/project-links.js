import React from 'react';
import { GoMarkGithub as GithubIcon } from 'react-icons/go';

function ProjectLinks(props) {
  let className =
    props.viewport === 'small' ? 'links--below-tablet' : 'links--tablet-up';

  return (
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
  );
}

export default ProjectLinks;
