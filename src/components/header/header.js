import React from 'react';
import { Link } from 'gatsby';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <Link className="header__title" to="/">
            jonathan<span className="header__title-bold">taylor</span>
          </Link>

          <nav>
            <Link className="header__nav-link" to="/projects">
              Projects
            </Link>
            <Link className="header__nav-link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
