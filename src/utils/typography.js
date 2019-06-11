import Typography from 'typography';
// import Wordpress2016 from "typography-theme-wordpress-2016"
import funstonTheme from 'typography-theme-funston';

// Wordpress2016.overrideThemeStyles = () => {
funstonTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    // 'code[class*="language-"],pre[class*="language-"]': {
    //   fontSize: '14px',
    // },
  };
};

// delete Wordpress2016.googleFonts;

// const typography = new Typography(Wordpress2016);
const typography = new Typography(funstonTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
