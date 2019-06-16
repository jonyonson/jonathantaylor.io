import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { GoMarkGithub as GithubIcon } from 'react-icons/go';

import '../styles/pages/projects.scss';

class Projects extends Component {
  render() {
    return (
      <Layout>
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
          front-end developer on the project. Stockly is a web application that
          connects the user to historical price information for any publicly
          traded company. The user can also track a stock's performance over
          time by adding it to their watchlist.
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
      </Layout>
    );
  }
}

const projectQuery = graphql`
  query ProjectQuery {
    stockly: file(absolutePath: { regex: "/stockly-on-laptop.png/" }) {
      childImageSharp {
        fluid(maxWidth: 670) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Projects;
