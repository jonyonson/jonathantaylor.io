import React, { Component, Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

// Components
import SEO from '../components/seo';
import Project from '../components/project';

const projects = {
  snapstock: {
    name: 'Snapstock',
    github: 'https://github.com/jonyonson/snapstock-fe',
    githubBackEnd: 'https://github.com/jonyonson/snapstock-be',
    demo: 'https://snapstockapp.com/',
    description:
      'Snapstock is a full-stack web application that provides up-to-date business news and real-time stock data. Users can track stocks over time by saving them to their watchlist. Snapstock is built with React on the front-end and Node.js/PostgreSQL on the backend. A separate Flask server is utilized to scrape market index data.',
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
    // demo: 'https://stockly.netlify.app',
    description:
      "Stockly was built during a Lambda School build week and was a collaboration between a cross-functional team of developers. I worked as front-end developer on the project and utilized React and Redux. Stockly provides users with historical price information and analysis for any publicly traded company as well as sentiment analysis from recent tweets mentioning that company's stock symbol.",
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
                image={data.snapstock.childImageSharp.gatsbyImageData}
                github={projects.snapstock.github}
                githubBackEnd={projects.snapstock.githubBackEnd}
                demo={projects.snapstock.demo}
                description={projects.snapstock.description}
                // info={projects.snapstock.info}
              />

              <Project
                name={projects.wasteland.name}
                image={data.wasteland.childImageSharp.gatsbyImageData}
                github={projects.wasteland.github}
                demo={projects.wasteland.demo}
                description={projects.wasteland.description}
              />

              <Project
                name={projects.stockly.name}
                image={data.stockly.childImageSharp.gatsbyImageData}
                github={projects.stockly.github}
                demo={projects.stockly.demo}
                description={projects.stockly.description}
              />
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

const projectQuery = graphql`query ProjectQuery {
  snapstock: file(absolutePath: {regex: "/snapstock.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 340, layout: FIXED)
    }
  }
  stockly: file(absolutePath: {regex: "/stockly-on-laptop.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 340, layout: FIXED)
    }
  }
  wasteland: file(absolutePath: {regex: "/wasteland-on-laptop.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 340, layout: FIXED)
    }
  }
}
`;

export default Projects;
