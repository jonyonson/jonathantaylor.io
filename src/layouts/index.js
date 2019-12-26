import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Transition from '../components/transition.js';
import './layout.scss';
import '../styles/prism.scss';

function Layout({ children, location }) {
  return (
    <div className="layout">
      <Header />
      <main>
        <Transition location={location}>{children}</Transition>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
