import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Source Sans Pro", sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }
  a {
    text-decoration: none;
  }  
`

function App() {
  return <React.Fragment>
    <GlobalStyle />
    <Router />
  </React.Fragment>
}

export default App;
