import React from 'react';
import styled from 'styled-components';
import { widths } from '../theme';

function Bio() {
  return (
    <StyledBio>
      <p className="bio__greeting">
        {' '}
        <strong>Hi, I&#39;m Jonathan</strong>{' '}
        <span className="bio__hand" role="img" aria-label="a waving hand">
          👋🏻
        </span>
      </p>
      <p>
        I am a software developer in Nashville, Tennessee. I enjoy solving
        interesting problems and building cool things.
      </p>
    </StyledBio>
  );
}

const StyledBio = styled.div`
  font-size: 24px;
  line-height: 1.5;
  margin-top: 3rem;
  margin-bottom: 4rem;
  margin: 3rem 0 2rem;

  @media (max-width: ${widths.mobile}) {
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    line-height: 1.4;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 0;
  }

  .bio__avatar {
    margin-right: 1.5rem;
    margin-bottom: 0;
    margin-bottom: 1rem;
    min-width: 125px;
    border-radius: 100%;

    @media (max-width: ${widths.mobile}) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }

  .bio__hand {
    font-size: 26px;
  }

  .bio__greeting {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export default Bio;
