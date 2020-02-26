/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import './bio.scss';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div className="bio">
            <Image
              className="bio__avatar"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />

            <p>
              <span className="bio__hand" role="img" aria-label="a waving hand">
                👋🏻
              </span>{' '}
              <strong>Hi, I&#39;m Jonathan</strong>. I am a{' '}
              <a href={`https://github.com/${social.github}`}>
                software developer
              </a>{' '}
              that enjoys making cool things for the web. Take a look at some{' '}
              <Link to="/projects">projects</Link> I have been working on
              lately.
            </p>
          </div>
        );
      }}
    />
  );
}

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
