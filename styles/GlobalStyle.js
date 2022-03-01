import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.6rem ;
  }
  html{
    font-size: 62.5%;

    @media screen and (max-width: 960px){
      font-size: 87.5%;
    }

    @media screen and (max-width: 1280px){
      font-size: 93.75%;
    }
  }

`;
