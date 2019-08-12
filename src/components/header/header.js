import React from 'react';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';

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
            <span
              role="img"
              aria-label=""
              className="toggle-dark-mode"
              onClick={darkMode.toggle}
            >
              🌕
            </span>
          ) : (
            <span
              role="img"
              aria-label=""
              className="toggle-dark-mode"
              onClick={darkMode.toggle}
            >
              🌒
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
