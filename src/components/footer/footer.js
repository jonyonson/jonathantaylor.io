import React, { Component } from 'react';
// import { Link } from 'gatsby';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          © {new Date().getFullYear()} Jonathan Taylor
          {/* Built with <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
