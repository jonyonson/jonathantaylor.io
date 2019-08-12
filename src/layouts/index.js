import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Transition from '../components/transition.js';
// import 'typeface-space-mono';
import './layout.scss';

import '../styles/prism.scss';

class Layout extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <div className="layout">
        <Header />
        <main className="layout-main">
          {location.pathname === '/projects' && (
            <div className="layout-main__container--projects">
              <Transition location={location}>{children}</Transition>
            </div>
          )}

          {location.pathname !== '/projects' && (
            <div className="layout-main__container">
              <Transition location={location}>{children}</Transition>
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
