import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2 {
    font-family: 'Libre Baskerville', serif;
  }
`;
