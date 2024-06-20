import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: #f0f0f0;
    transition: background 0.3s ease-in-out;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
  }

  a {
    transition: color 0.3s ease-in-out;
  }
`;

export default GlobalStyle;
