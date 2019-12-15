import React from 'react';
import { Link } from 'gatsby';
// import { FaSun, FaMoon } from 'react-icons/fa';
// import useDarkMode from '../../hooks/useDarkMode';
import './header.scss';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

function Header() {
  // const [darkMode, setDarkMode] = useDarkMode();
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

          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />{' '}
                Dark mode
              </label>
            )}
          </ThemeToggler>

          {/* {darkMode === true ? (
            <FaSun
              onClick={() => setDarkMode(false)}
              className="toggle-dark-mode--true"
            />
          ) : (
            <FaMoon
              onClick={() => setDarkMode(true)}
              className="toggle-dark-mode--false"
            />
          )} */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
