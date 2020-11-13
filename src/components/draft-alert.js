import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { FaGithub } from 'react-icons/fa';

function DraftAlert({ slug }) {
  return (
    <Alert>
      <div className="heading">Unpublished Article</div>
      Hi, friend! You are looking at a blog post that is &quot;unpublished&quot;
      (still in draft mode and not indexed on the front page). I use these blog
      posts primarily as a way to learn a new concept and to document my
      learnings for my future self. Therefore, I <del>may</del> likely have
      mistakes or may be missing something that would add value and I would
      absolutely love your feedback/suggestions/edits.
      <a
        href={`https://github.com/jonyonson/jonathantaylor.io/blob/master/content/blog/${slug}index.md`}
        className="github"
      >
        <FaGithub />
        Edit on GitHub
      </a>
    </Alert>
  );
}

export default DraftAlert;

const Alert = styled.div`
  margin-bottom: 2rem;
  padding: 1.7rem 1rem 1rem;
  background: ${theme.primaryDark};
  position: relative;
  color: black;
  margin-top: 2.5rem;

  .github {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    font-weight: bold;
    color: ${theme.primaryLight};

    svg {
      margin-right: 8px;
      margin-bottom: 5px;
    }

    &:hover {
      border-bottom: 2px solid transparent;
      text-decoration: underline;
    }
  }

  .heading {
    position: absolute;
    top: -20px;
    font-weight: bold;
    color: white;
    background: green;
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.primaryLight};
  }
`;
