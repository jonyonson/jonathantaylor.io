import React, { Component } from 'react';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { GoMarkGithub as GithubIcon } from 'react-icons/go';

import '../styles/pages/projects.scss';

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <SEO title="Projects" />

        <div className="project">
          <a
            href="https://github.com/jonyonson/build-stockly-frontend"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '25px' }}
            className="projects__links--below-tablet"
          >
            <div className="projects__links">
              <GithubIcon size={20} style={{ marginRight: '5px' }} />
              <span style={{ fontSize: '18px' }}>Source Code</span>
            </div>
          </a>

          <StaticQuery
            query={projectQuery}
            render={data => (
              <Image
                className="projects__browser-screenshot"
                fixed={data.stockly.childImageSharp.fixed}
                alt="Stockly Screenshot"
              />
            )}
          />
          <div className="projects__info">
            <div>
              <h2 className="projects__title">Stockly</h2>
              <p>
                Stockly was built during a{' '}
                <a href="https://lambdaschool.com">Lambda School</a> build week
                and I was a front-end developer on the project. Stockly was
                built with React and provides users with historical price
                information and analysis for any publicly traded company.
              </p>
            </div>

            <a
              href="https://github.com/jonyonson/build-stockly-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects__links projects__links--tablet-up">
                <GithubIcon size={20} style={{ marginRight: '5px' }} />
                <span style={{ fontSize: '16px' }}>Source Code</span>
              </div>
            </a>
          </div>
        </div>

        <hr />

        <div className="project">
          <a
            href="https://github.com/jonyonson/build-stockly-frontend"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '25px' }}
            className="projects__links--below-tablet"
          >
            <div className="projects__links">
              <GithubIcon size={20} style={{ marginRight: '5px' }} />
              <span style={{ fontSize: '18px' }}>Source Code</span>
            </div>
          </a>

          <StaticQuery
            query={projectQuery}
            render={data => (
              <Image
                className="projects__browser-screenshot"
                fixed={data.fylo.childImageSharp.fixed}
                alt="Fylo Screenshot"
              />
            )}
          />
          <div className="projects__info">
            <div>
              <h2 className="projects__title">Fylo Landing Page</h2>
              <p>
                This project consisted of building a landing page for a
                fictional company.
              </p>
            </div>

            <a
              href="https://github.com/jonyonson/fylo-landing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects__links projects__links--tablet-up">
                <GithubIcon size={20} style={{ marginRight: '5px' }} />
                <span style={{ fontSize: '16px' }}>Source Code</span>
              </div>
            </a>
          </div>
        </div>

        <hr />
      </React.Fragment>
    );
  }
}

const projectQuery = graphql`
  query ProjectQuery {
    stockly: file(absolutePath: { regex: "/stockly-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fylo: file(absolutePath: { regex: "/fylo-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Projects;

/* <React.Fragment>
<SEO title="Projects" />

<div className="projects__links">
  <h1 className="projects__title">
    <a className="projects__link" href="https://stockly-fe.netlify.com">
      Stockly
    </a>
  </h1>

  <a
    className="projects__links__github"
    href="https://github.com/jonyonson/build-stockly-frontend"
  >
    <GithubIcon size={32} />
  </a>
</div>
<p>
  Stockly was built by a small team of developers during a{' '}
  <a href="https://lambdaschool.com">Lambda School</a> build week. I was
  a front-end developer on the project. Stockly is a web application
  that connects the user to historical price information and analysis
  for any publicly traded company. The user can also track a stock's
  performance over time by adding it to their watchlist.
</p>

<StaticQuery
  query={projectQuery}
  render={data => (
    <div>
      <Image
        className="projects__browser-screenshot"
        fluid={data.stockly.childImageSharp.fluid}
        alt="Stockly Screenshot"
      />
    </div>
  )}
/>

<h4>Technologies and Tools</h4>
<p>
  Stockly's front-end is a React app and uses Redux for state
  management. Some of the more significant packages used for the project
  include <a href="https://github.com/uber/react-vis">react-vis</a> for
  the historical graphs and pie-charts and{' '}
  <a href="https://github.com/moroshko/react-autosuggest">
    react-autosuggest
  </a>{' '}
  for the autocomplete functionality in the search bar. The{' '}
  <a href="https://www.alphavantage.co/">Alpha Vantage API</a> was used
  to access realtime and historical stock data.
</p>
<hr />
<div className="projects__outro">
  <p>
    I have several more projects that I will be adding soon. You can
    also checkout my <a href="https://github.com/jonyonson">GitHub</a>{' '}
    profile to view more of my code.
  </p>
  <hr />
</div>
</React.Fragment> */

/* <a
className="projects__links__github"
href="https://github.com/jonyonson/build-stockly-frontend"
>
<div className="test">
   <GithubIcon /> <span>Source</span>
  <GithubIcon />
</div>
</a> */
