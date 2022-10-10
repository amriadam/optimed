import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

html, body {
    overflow-x: hidden;
}

::selection {
  color: #ffffff;
  background: #c16de1;
}
`;

export default GlobalStyle;
