import React, { Component, Fragment } from 'react';
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
    description: `Rest Easy is an application designed to allow parents to track the sleep of their children. This RESTful API was built with Node/Express, PostgreSQL and Knex.js and deployed to Heroku. `,
  },
  instagram: {
    name: 'Instagram Clone',
    github: 'https://github.com/jonyonson/instagram-clone',
    description:
      'An Instagram clone built using React with search, like and comment functionality.',
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
      <Fragment>
        <SEO title="Projects" />
        <StaticQuery
          query={projectQuery}
          render={(data) => (
            <Fragment>
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
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

const projectQuery = graphql`
  query ProjectQuery {
    stockly: file(absolutePath: { regex: "/stockly-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    restEasy: file(absolutePath: { regex: "/rest-easy-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagram: file(absolutePath: { regex: "/instagram-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fylo: file(absolutePath: { regex: "/fylo-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Projects;
