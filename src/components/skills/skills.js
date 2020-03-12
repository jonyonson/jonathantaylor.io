import React from 'react';
import styled from 'styled-components';

import cssLogo from './logos/css.png';
import htmlLogo from './logos/html.png';
import jsLogo from './logos/javascript.svg';
import nodeLogo from './logos/node.png';
import pgLogo from './logos/postgres.svg';
import pythonLogo from './logos/python.png';
import reactLogo from './logos/react.png';
import graphqlLogo from './logos/graphql.svg';

function Skills() {
  return (
    <div className="skills">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <LogoContainer>
          <span>HTML</span>
          <img src={htmlLogo} alt="" />
        </LogoContainer>

        <LogoContainer>
          <span>JavaScript</span>
          <img src={jsLogo} alt="" />
        </LogoContainer>

        <LogoContainer>
          <span>React</span>
          <img src={reactLogo} alt="" />
        </LogoContainer>

        <LogoContainer>
          <span>PostgreSQL</span>
          <img src={pgLogo} alt="" />
        </LogoContainer>

        <LogoContainer>
          <span>CSS</span>
          <img src={cssLogo} alt="" />
        </LogoContainer>

        <LogoContainer>
          <span>Node.js</span>
          <img src={nodeLogo} alt="" />
        </LogoContainer>

        <LogoContainer>
          <span>GraphQL</span>
          <img src={graphqlLogo} alt="" />
        </LogoContainer>

        <LogoContainer>
          <span>Python</span>
          <img src={pythonLogo} alt="" />
        </LogoContainer>
      </div>
    </div>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  span {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  img {
    height: 60px;
    height: 3rem;
    margin-bottom: 2rem;
  }
`;

export default Skills;
