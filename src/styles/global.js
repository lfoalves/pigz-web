import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;

    display: grid;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;

    font-family: ${({theme}) => theme.FONT.POPPINS};
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 60rem;
    margin: 0 auto;
  }
`;