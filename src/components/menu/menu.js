import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StyledMenu } from './menu.styled';

const Menu = ({ open, dark, setOpen }) => {
  return (
    <StyledMenu open={open} dark={dark}>
      <Link to="/" onClick={() => setOpen(!open)}>
        Articles
      </Link>
      <Link to="/contact" onClick={() => setOpen(!open)}>
        Contact Me
      </Link>
      <Link to="/projects" onClick={() => setOpen(!open)}>
        Portfolio
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Menu;
