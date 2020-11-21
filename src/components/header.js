import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import styles, { fonts, widths } from '../theme';

// Components
import Toggle from './toggle';
import Burger from './burger';
import Menu from './menu';

// Images
import sun from '../assets/images/sun.png';
import moon from '../assets/images/moon.png';

function Header() {
  const [theme, setTheme] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, [theme]);

  return (
    <StyledHeader>
      <div className="header__container">
        <Link className="header__title" to="/">
          jonathan<span className="header__title-bold">taylor</span>
        </Link>

        <div>
          <nav className="header__nav">
            <Link className="header__nav-link" to="/projects">
              Projects
            </Link>

            <Link className="header__nav-link" to="/contact">
              Contact
            </Link>

            {theme !== null ? (
              <Toggle
                icons={{
                  checked: (
                    <img
                      src={moon}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: 'none' }}
                    />
                  ),
                  unchecked: (
                    <img
                      src={sun}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: 'none' }}
                    />
                  ),
                }}
                checked={theme === 'dark'}
                onChange={(e) =>
                  window.__setPreferredTheme(
                    e.target.checked ? 'dark' : 'light',
                  )
                }
              />
            ) : (
              <div style={{ height: '24px' }} />
            )}
          </nav>
          <div>
            <ToggleWrapper>
              {theme !== null ? (
                <Toggle
                  icons={{
                    checked: (
                      <img
                        src={moon}
                        width="16"
                        height="16"
                        role="presentation"
                        style={{ pointerEvents: 'none' }}
                      />
                    ),
                    unchecked: (
                      <img
                        src={sun}
                        width="16"
                        height="16"
                        role="presentation"
                        style={{ pointerEvents: 'none' }}
                      />
                    ),
                  }}
                  checked={theme === 'dark'}
                  onChange={(e) =>
                    window.__setPreferredTheme(
                      e.target.checked ? 'dark' : 'light',
                    )
                  }
                />
              ) : (
                <div style={{ height: '24px' }} />
              )}
            </ToggleWrapper>
          </div>
          <BurgerWrapper>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} dark={theme === 'dark'} />
          </BurgerWrapper>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;

const BurgerWrapper = styled.div`
  @media (min-width: 577px) {
    display: none;
  }
`;

const ToggleWrapper = styled.div`
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 54px;

  @media (min-width: 577px) {
    display: none;
  }
`;

const StyledHeader = styled.header`
  background: ${styles.light.headerBackground};
  padding: 1rem;

  a {
    border-bottom: none;
    color: white;

    &:hover {
      border-bottom: none;
      color: white;
    }
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .header__title {
    font-family: ${fonts.body};
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 34px;
    margin: 0;
    color: white;
    text-decoration: none;
    text-shadow: none;
    background-image: none;

    &-bold {
      font-family: ${fonts.header};
      letter-spacing: 0.5px;
      font-weight: bold;
    }

    @media (max-width: ${widths.mobile}) {
      font-size: 1.3rem;
    }
  }

  .header__nav {
    display: flex;
    align-items: center;

    .toggle-dark-mode--true,
    .toggle-dark-mode--false {
      margin-left: 15px;
      cursor: pointer;
    }

    .toggle-dark-mode--true {
      color: ${styles.dark.headerFont};
    }

    .toggle-dark-mode--false {
      color: ${styles.dark.headerFont};
    }

    @media (max-width: ${widths.mobile}) {
      display: none;
    }
  }

  .header__nav-link {
    letter-spacing: 1px;
    font-family: ${fonts.bodyFont};
    font-size: 14px;
    margin-left: 15px;
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: none;
    background-image: none;

    &:hover {
      border-bottom: none;
      opacity: 0.8;
    }
    @media (max-width: ${widths.mobile}) {
      font-size: 13px;
    }
  }
`;
