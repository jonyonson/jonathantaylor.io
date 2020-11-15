import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../theme';

const Menu = ({ open, dark, setOpen }) => {
  return (
    <StyledMenu open={open} dark={dark}>
      <Link to="/" onClick={() => setOpen(!open)}>
        📰 Articles
      </Link>
      <Link to="/contact" onClick={() => setOpen(!open)}>
        📬 Contact
      </Link>
      <Link to="/projects" onClick={() => setOpen(!open)}>
        💻 Projects
      </Link>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.dark.background};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;

  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 9;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Menu;
