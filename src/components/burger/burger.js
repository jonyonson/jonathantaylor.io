import React from 'react';
import { StyledBurger } from './burger.styled';
import PropTypes from 'prop-types';

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} aria-label="menu">
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Burger;
