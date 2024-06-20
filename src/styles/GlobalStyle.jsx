import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    height: 100%;
    font-family: 'Arial', sans-serif;
    background: #f0f0f0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
  }

  a {
    transition: color 0.3s ease-in-out;
  }
`;

export default GlobalStyle;
