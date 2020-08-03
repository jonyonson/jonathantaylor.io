import React, { Component, Fragment } from 'react';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';
import Project from '../components/project';

const projects = {
  snapstock: {
    name: 'Snapstock',
    github: 'https://github.com/jonyonson/snapstock-fe',
    githubBackEnd: 'https://github.com/jonyonson/snapstock-be',
    demo: 'https://snapstockapp.com/',
    description:
      'Snapstock is a full-stack web application that provides up-to-date business news and real-time stock data. Users can track stocks over time by saving them to their watchlist. Snapstock is built with a React front-end using TypeScript and Node.js/PostgreSQL on the backend. A separate Flask server is utilized to scrape market index data.',
    info:
      'Snapstock is a work in progress and will contain some some bugs and placeholders.',
  },
  wasteland: {
    name: 'Digital Wasteland',
    github: 'https://github.com/django-adventure',
    demo: 'https://wasteland.netlify.com/',
    description:
      'Digital Wasteland is a take on the early text based multi-user dungeon games. It consists of 100 procedurally generated rooms that the player can traverse while interacting with other players through live chat (and other shenanigans). The project was a collaboration with three other developers. Tech stack includes Django and PostgreSQL on the backend and a React front-end. Pusher was used for the realtime communication and player awareness.',
  },
  stockly: {
    name: 'Stockly',
    github: 'https://github.com/lambda-stockly/build-stockly-frontend',
    demo: 'https://stockly.netlify.app',
    description:
      'Stockly was built during a Lambda School build week and I was a front-end developer on the project. Stockly was built with React and provides users with historical price information and analysis for any publicly traded company.',
  },
  restEasy: {
    name: 'Rest Easy (REST API)',
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
                name={projects.snapstock.name}
                image={data.snapstock.childImageSharp.fixed}
                github={projects.snapstock.github}
                githubBackEnd={projects.snapstock.githubBackEnd}
                demo={projects.snapstock.demo}
                description={projects.snapstock.description}
                // info={projects.snapstock.info}
              />

              <Project
                name={projects.wasteland.name}
                image={data.wasteland.childImageSharp.fixed}
                github={projects.wasteland.github}
                demo={projects.wasteland.demo}
                description={projects.wasteland.description}
              />

              <Project
                name={projects.stockly.name}
                image={data.stockly.childImageSharp.fixed}
                github={projects.stockly.github}
                demo={projects.stockly.demo}
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
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

const projectQuery = graphql`
  query ProjectQuery {
    snapstock: file(absolutePath: { regex: "/snapstock.png/" }) {
      childImageSharp {
        fixed(width: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stockly: file(absolutePath: { regex: "/stockly-on-laptop.png/" }) {
      childImageSharp {
        fixed(width: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wasteland: file(absolutePath: { regex: "/wasteland-on-laptop.png/" }) {
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
