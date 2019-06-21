import React from 'react';
import { Link } from 'gatsby';
// import { FiMenu } from 'react-icons/fi';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <Link className="header__title" to="/">
            jonathan<span className="header__title-bold">taylor</span>
          </Link>

          <nav className="header__nav">
            <Link className="header__nav-link" to="/projects">
              Projects
            </Link>
            <Link className="header__nav-link" to="/contact">
              Contact
            </Link>
          </nav>

          {/* <FiMenu className="header__menu" /> */}
        </div>
      </header>
    );
  }
}

export default Header;
