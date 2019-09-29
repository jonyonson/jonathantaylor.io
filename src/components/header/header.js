import React from 'react';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import { FaSun, FaMoon } from 'react-icons/fa';
import './header.scss';

function Header() {
  const darkMode = useDarkMode(false);
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__title" to="/">
          jonathan<span className="header__title-bold">taylor</span>
        </Link>

        <nav className="header__nav">
          <Link className="header__nav-link" to="/contact">
            Contact
          </Link>

          <Link className="header__nav-link" to="/projects">
            Projects
          </Link>

          {darkMode.value === true ? (
            <FaSun
              onClick={darkMode.toggle}
              className="toggle-dark-mode--true"
            />
          ) : (
            <FaMoon
              onClick={darkMode.toggle}
              className="toggle-dark-mode--false"
            />
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
