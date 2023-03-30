import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  html {
    font-size: 10px;
  }

  @font-face {
    font-family: 'mago3';
    src: url('fonts/mago3.woff2') format('woff2'),
        url('fonts/mago3.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  body { 
    background-color: var(--color-green);
    font-family: 'mago3', sans-serif;
  }
`
export default Base;