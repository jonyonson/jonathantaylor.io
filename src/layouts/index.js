import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Transition from '../components/transition.js';
import './layout.scss';
import '../styles/prism.scss';

function Layout({ children, location }) {
  return location.pathname === '/projects' ? (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <div className="layout-main__container--projects">
          <Transition location={location}>{children}</Transition>
        </div>
      </main>
      <Footer />
    </div>
  ) : (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <div className="layout-main__container">
          <Transition location={location}>{children}</Transition>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
