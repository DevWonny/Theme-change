import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  body{
    margin : 0;
    color : ${(props) => (props.isDark ? "#000" : "#fff")};
    background: ${(props) => (props.isDark ? "#fff" : "#000")};
    font-size : 100px;

    button{
      background-color: ${(props) =>
        props.isDark ? "red" : "purple"} !important;
        color : ${(props) => (props.isDark ? "#000" : "#fff")};
    }
  }

`;

export default GlobalStyle;
