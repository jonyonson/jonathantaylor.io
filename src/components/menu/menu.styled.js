import styled from 'styled-components';
import theme from '../../theme';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: ${({ dark }) =>
    dark === true ? theme.bgDark : theme.bgLight}; */
  background: ${theme.bgDark};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  /* transform: translateX(-100%); */
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 9;

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  } */

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    text-decoration: none;
    transition: color 0.3s linear;

    /* @media (max-width: ${({ theme }) => theme.mobile}) { */
      @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    /* &:hover { */
      /* color: ${({ theme }) => theme.primaryHover}; */
      /* color: #343078; */
    /* } */
  }
`;
