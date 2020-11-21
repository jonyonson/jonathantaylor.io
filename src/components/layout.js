import React from 'react';
import styled from 'styled-components';

// Components
import Header from './header';
import Footer from './footer';
import Fonts from './fonts';
import GlobalStyles from '../styles/global-styles';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <StyledLayout>
        <Header />
        <main>
          {/* <Transition location={location}>{children}</Transition> */}
          {children}
        </main>
        <Footer />
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  main {
    flex-grow: 1;
    padding: 0 1rem;
    margin: 0 auto;
    width: 1000px;
    max-width: 100%;
  }
`;

export default Layout;
