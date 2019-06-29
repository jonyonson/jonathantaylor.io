import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Transition from '../components/transition.js';
import 'typeface-space-mono';
import './layout.scss';
import consoleMessage from '../utils/consoleMessage';

// import 'prismjs/themes/prism-solarizedlight.css';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
// import '../styles/prism-styles.scss';
import '../styles/prism.scss';
console.log(consoleMessage());
class Layout extends Component {
  render() {
    const { children, location } = this.props;

    return (
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
}

export default Layout;
