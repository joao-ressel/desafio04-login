import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    width: 100%;
  }

  #root{
    height: 100%;
    margin: auto 0;
  }
`;