import React, { Component } from 'react';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';
import Project from '../components/project';

const projects = {
  stockly: {
    name: 'Stockly',
    github: 'https://github.com/jonyonson/build-stockly-frontend',
    description:
      'Stockly was built during a Lambda School build week and I was a front-end developer on the project. Stockly was built with React and provides users with historical price information and analysis for any publicly traded company.',
  },
  restEasy: {
    name: 'Rest Easy',
    github:
      'https://github.com/lambda-build-week-sleep-tracker/BE-Sleep-Tracker',
    description: `I was the backend developer for Rest Easy, which is a web application designed to for parents to track the sleep of their children. This RESTful API was built with Node/Express, PostgreSQL and Knex.js and deployed to Heroku. `,
  },
  instagram: {
    name: 'Instagram Clone',
    github: 'https://github.com/jonyonson/instagram-clone',
    description: 'An Instagram clone built with React.',
  },
  fylo: {
    name: 'Fylo Landing Page',
    github: 'https://github.com/jonyonson/fylo-landing-page',
    description:
      'This project consisted of building a landing page for a fictional company.',
  },
};

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <SEO title="Projects" />
        <StaticQuery
          query={projectQuery}
          render={data => (
            <>
              <Project
                name={projects.stockly.name}
                image={data.stockly.childImageSharp.fixed}
                github={projects.stockly.github}
                description={projects.stockly.description}
              />

              <Project
                name={projects.restEasy.name}
                image={data.restEasy.childImageSharp.fixed}
                github={projects.restEasy.github}
                description={projects.restEasy.description}
              />

              <Project
                name={projects.instagram.name}
                image={data.instagram.childImageSharp.fixed}
                github={projects.instagram.github}
                description={projects.instagram.description}
              />

              <Project
                name={projects.fylo.name}
                image={data.fylo.childImageSharp.fixed}
                github={projects.fylo.github}
                description={projects.fylo.description}
              />
            </>
          )}
        />
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
    restEasy: file(absolutePath: { regex: "/rest-easy-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagram: file(absolutePath: { regex: "/instagram-on-laptop.png/" }) {
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

/* <p>
  Stockly was built by a small team of developers during a{' '}
  <a href="https://lambdaschool.com">Lambda School</a> build week. I was
  a front-end developer on the project. Stockly is a web application
  that connects the user to historical price information and analysis
  for any publicly traded company. The user can also track a stock's
  performance over time by adding it to their watchlist.
</p>


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
</p> */
