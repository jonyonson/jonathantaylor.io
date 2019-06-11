import React from 'react';
import './layout.css';

// import 'typeface-space-mono';
// import 'typeface-spectral';

import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props;
    const { children } = this.props;
    const rootPath = '${__PATH_PREFIX__}/';
    // let header;

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   );
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: 'Montserrat, sans-serif',
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   );
    // }
    return (
      <div className="layout">
        {/* <Header /> */}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
