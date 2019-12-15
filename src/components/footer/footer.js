import React, { Component } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
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
              <FaGithub size={24} />
            </a>
            <a
              style={{ marginLeft: 24 }}
              className="footer__social__link"
              href="https://twitter.com/jonyonson"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
