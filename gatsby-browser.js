// custom typefaces
// import 'typeface-quattrocento-sans';
// import 'typeface-work-sans';
require('typeface-quattrocento-sans');
require('typeface-work-sans');
// monospace font
// import './src/styles/_dank-mono.css';
require('./src/styles/_dank-mono.css');

// global styles
// import './src/styles/_globals.css';
require('./src/styles/_globals.css');

const React = require('react');
const Layout = require('./src/components/Layout').default;

// eslint-disable-next-line
exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);
