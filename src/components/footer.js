import React, { Component } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import theme from '../theme';

class Footer extends Component {
  render() {
    return (
      <StyledFooter className="footer">
        <div className="footer__container">
          <div>© {new Date().getFullYear()} Jonathan Taylor</div>
          <div className="footer__social">
            <a href="https://github.com/jonyonson">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-craig-taylor">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/jonyonson">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.footer`
  padding: 1rem;
  background-color: #f1f2eb;
  font-size: 16px;
  margin-top: 1rem;

  .footer__container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
  }

  .footer__social {
    list-style-type: none;

    a {
      display: inline-block;
      margin-right: 24px;
      border-bottom: none;

      &:hover {
        border-bottom: none;
        color: ${theme.light.primaryDarken};
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export default Footer;
