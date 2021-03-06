import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu Encode Sans Expanded', sans-serif;
    }

    html, body {
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
