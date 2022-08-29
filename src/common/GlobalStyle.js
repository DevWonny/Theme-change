import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  body{
    margin : 0;
    color : #fff;
    background-color : #000;
    font-size : 100px;
  }
`;

export default GlobalStyle;
