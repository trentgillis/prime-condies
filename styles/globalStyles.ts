import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    // TODO: Update to correct fonts
    font-family: 'Montserrat', 'Roboto', sans-serif;
    margin: 0;
  }
  html, body, #__next {
    height: 100%;
  }
  html {
    background-color: #f8f8f8;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  h1 {
    font-weight: var(--font-weight-bold);
  }
  
  h2 {
    font-weight: var(--font-weight-medium);
  }

  #root, #__next {
    isolation: isolate;
  }

  :root {
    --font-weight-extra-bold: 700;
    --font-weight-bold: 600;
    --font-weight-medium: 500;
    --font-weight-light: 400;
  }
`;
