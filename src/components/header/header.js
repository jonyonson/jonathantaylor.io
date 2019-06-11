import React from 'react';
import { Link } from 'gatsby';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">let foo, bar;</h1>
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
