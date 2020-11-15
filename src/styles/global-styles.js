import { createGlobalStyle } from 'styled-components';
import { lighten, darken } from 'polished';

import theme, { widths, fonts } from '../theme';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: ${fonts.monospace};
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  optgroup {
    font-weight: 700;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  html {
    font: 125%/1.45 ${fonts.body};
    box-sizing: border-box;
    overflow-y: scroll;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  body {
    color: ${theme.light.bodyFont};
    font-family: ${fonts.body};
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  img {
    max-width: 100%;
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
  }

  h1 {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
    color: ${theme.light.headerFont};
    font-family: ${fonts.header};
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    line-height: 1.1;
  }

  h2 {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
    color: ${theme.light.headerFont};
    font-family: ${fonts.header};
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 1.51572rem;
    line-height: 1.1;
  }

  h3 {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
    color: ${theme.light.headerFont};
    font-family: ${fonts.header};
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 1.31951rem;
    line-height: 1.1;
  }

  h4 {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
    color: ${theme.light.headerFont};
    font-family: ${fonts.header};
    font-weight: 600;
    font-size: 1rem;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }

  h5 {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
    color: ${theme.light.headerFont};
    font-family: ${fonts.header};
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 0.87055rem;
    line-height: 1.1;
  }

  h6 {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
    color: ${theme.light.headerFont};
    font-family: ${fonts.header};
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 0.81225rem;
    line-height: 1.1;
  }

  hgroup {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
  }

  ul {
    padding: 0;
    margin: 0;
    margin-left: 1.45rem;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    padding: 0;
    margin: 0;
    margin-left: 1.45rem;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
  }

  dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  p {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
  }

  figure {
    padding: 0;
    margin: 0;
    margin-bottom: 1.45rem;
  }

  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }

  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0.90625rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1.1487rem;
    line-height: 1.45rem;
    border-left: 0.54375rem solid ${theme.light.primary};
    color: hsla(0, 0%, 0%, 0.65);
    font-style: italic;
  }

  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  b {
    font-weight: 700;
  }

  strong {
    font-weight: 700;
  }

  dt {
    font-weight: 700;
  }

  th {
    font-weight: 700;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 0;
  }

  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }

  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }

  th:first-child,
  td:first-child {
    padding-left: 0;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
  }

  a {
    color: ${theme.light.primary};
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 2px solid transparent;
  }

  a:hover,
  a:active {
    color: ${darken(0.2, theme.light.primary)};
    transition: all 0.2s ease;
    text-shadow: none;
    background-image: none;
    border-bottom: 2px solid ${darken(0.2, theme.light.primary)};;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.175rem;
    margin-bottom: 0.725rem;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote cite {
    font-size: 1rem;
    line-height: 1.45rem;
    color: hsla(0, 0%, 0%, 0.8);
    font-style: normal;
    font-weight: 400;
  }

  blockquote cite:before {
    content: '— ';
  }

  @media only screen and (max-width: ${widths.mobile}) {
    html {
      font-size: 106.25%;
      line-height: 24.65px;
    }

    blockquote {
      border-left: 0.27187rem solid ${theme.light.primary};
      color: hsla(0, 0%, 0%, 0.59);
      padding-left: 0.81563rem;
      font-style: italic;
      margin-left: -1.0875rem;
      margin-right: 0;
    }
  }

  a.gatsby-resp-image-link {
    box-shadow: none;
  }

  .code-sandbox-link {
    display: block;
    margin-top: -1.5rem;
    margin-bottom: 1.45rem;
    font-weight: bold;
    border-bottom: none;
    font-size: 80%;

    &:hover {
      border-bottom: none;
    }

    @media only screen and (max-width: ${widths.mobile}) {
      margin-top: -1rem;
    }
  }

  code[class*='language-text'] {
    padding: 1px 2px;
    margin: 0px 1px;
    background: ${lighten(0.32, theme.light.primary)};
  }

  body.light {
    transition: background 0.2s ease;
  }

  body.dark {
    background: ${theme.dark.background};
    color: ${theme.dark.bodyFont};
    transition: background 0.2s ease;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.dark.headerFont};
    }
  }

  body.dark a {
    color: ${theme.dark.primary};

    &:hover {
      color: ${theme.dark.primaryDarken};
      border-bottom: 2px solid ${theme.dark.primaryDarken};
    }

    &.code-sandbox-link:hover {
      border-bottom: none;
    }
  }

  body.dark hr {
    background: rgba(255, 255, 255, 0.4);
  }

  body.dark blockquote {
    color: white;
    border-left: 0.54375rem solid ${theme.dark.primary};

    @media only screen and (max-width: ${widths.mobile}) {
      border-left: 0.27187rem solid ${theme.dark.primary};
    }
  }


  body.dark header {
    background: ${theme.dark.background};
  }

  body.dark header a {
    color: ${theme.dark.bodyFont};

    &:hover {
      border-bottom: none;
    }
  }

  body.dark .header__title:hover {
    color: ${theme.dark.bodyFont};
  }

  body.dark .footer {
    background-color: ${theme.dark.background};
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    a {
      color: ${theme.dark.bodyFont};

      &:hover {
        border-bottom: none;
        color: ${theme.dark.primary};
      }
    }
  }


  body.dark .form button {
    background: ${theme.dark.primary};
    color: ${theme.dark.background};

    &:hover {
      background: ${darken(0.1, theme.dark.primary)}
    }
  }

  body.dark .project {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    a {
      color: ${theme.dark.bodyFont};

      &:hover {
        color: ${theme.dark.primary};
        border-bottom: none;
      }
    }

    &:last-of-type {
      border-bottom: none;
    }
  }

  body.dark code[class*='language-text'] {
    background: rgba(255, 255, 255, 0.30);
    color: '#fff'
  }

  body.dark .post-link {
    div p {
      color: ${theme.dark.bodyFont};
    }
}

`;

export default GlobalStyles;
