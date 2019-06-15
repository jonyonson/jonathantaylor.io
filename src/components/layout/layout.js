import React from 'react';
import Header from '../header';
import Footer from '../footer';
import 'typeface-space-mono';
import './layout.scss';

import 'prismjs/themes/prism-solarizedlight.css';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import '../../styles/prism-styles.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Header />
        <main className="layout-main">
          <div className="layout-main__container">{children}</div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
