import { createGlobalStyle } from 'styled-components';

import DankMono_Regular from '../assets/fonts/dank-mono/DankMono-Regular.woff2';
import DankMono_Italic from '../assets/fonts/dank-mono/DankMono-Italic.woff2';
import DankMono_Bold from '../assets/fonts/dank-mono/DankMono-Bold.woff2';

import 'typeface-quattrocento-sans';
import 'typeface-work-sans';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Dank Mono';
    src: url(${DankMono_Regular}) format('woff 2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Dank Mono';
    src: url(${DankMono_Italic}) format('woff 2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Dank Mono';
    src: url(${DankMono_Bold}) format('woff 2');
    font-weight: 700;
    font-style: normal;
  }
`;

export default Fonts;
