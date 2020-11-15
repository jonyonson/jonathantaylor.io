import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { widths } from '../theme';

// https://www.gatsbyjs.org/docs/static-query/

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <StyledBio>
            <Image
              className="bio__avatar"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />

            <p>
              <span className="bio__hand" role="img" aria-label="a waving hand">
                👋🏻
              </span>{' '}
              <strong>Hi, I&#39;m Jonathan</strong>. I am a software developer
              in Nashville 🎸 that enjoys solving interesting problems and
              making cool things for the web.
            </p>
          </StyledBio>
        );
      }}
    />
  );
}

const StyledBio = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 1.5;
  margin-top: 3rem;
  margin-bottom: 4rem;
  margin: 3rem 0 2rem;
  align-items: flex-start;

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
`;

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`;

export default Bio;
