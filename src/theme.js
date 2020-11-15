import { lighten, darken } from 'polished';
console.log(lighten);
console.log(darken);

// light theme
const tartOrange = '#fb4d3d';

// dark theme
const yellow = '#f0e995';

const theme = {
  light: {
    primary: tartOrange,
    primaryLighten: lighten(0.1, tartOrange),
    primaryDarken: darken(0.2, tartOrange),
    bodyFont: 'hsla(0, 0%, 0%, 0.8)',
    headerFont: 'hsla(0, 0%, 0%, 0.9)',
    headerBackground: '#393e41',
  },
  dark: {
    primary: yellow,
    primaryLighten: lighten(0.1, yellow),
    primaryDarken: darken(0.2, yellow),
    // background: '#323639',
    background: '#202124',
    bodyFont: '#fff',
    headerFont: '#fff',
  },
};

export const widths = {
  mobile: '576px',
};

export const fonts = {
  body: "'Quattrocento Sans', sans-serif",
  header: "'Work Sans', sans-serif",
  monospace: "'Dank Mono', Consolas, Monaco, 'Ubuntu Mono', monospace",
};

export default theme;
