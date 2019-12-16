import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Toggle from '../toggle';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import Burger from '../burger';
import Menu from '../menu';
import './header.scss';

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
                window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
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
          <BurgerWrapper>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} dark={theme === 'dark'} />
          </BurgerWrapper>
        </div>
      </div>
    </header>
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
