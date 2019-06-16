import React, { Component } from 'react';
// import { Link } from 'gatsby';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div>© {new Date().getFullYear()} Jonathan Taylor</div>
          <div className="footer__social">
            <a
              className="footer__social__link"
              href="https://github.com/jonyonson"
            >
              GitHub
            </a>
            <a
              className="footer__social__link"
              href="https://twitter.com/jonyonson"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
