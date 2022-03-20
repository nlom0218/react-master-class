import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from './theme';

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
    color: inherit;
  }  
`

function App() {
  const [isDark, setIsDark] = useState(false)
  const toggleMode = () => setIsDark(prev => !prev)
  return <React.Fragment>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HelmetProvider>

        <button onClick={toggleMode}>Toggle Mode</button>
        <Router />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  </React.Fragment>
}

export default App;
