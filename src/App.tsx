import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Source Sans Pro", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.6s ease, color 0.6s ease;
  }
  a {
    text-decoration: none;
    color: inherit;
  }  
`;

const DarkBtn = styled.div`
  position: fixed;
  bottom: 1%;
  right: 1%;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.6s ease, color 0.6s ease;
`;

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setIsDark((prev) => !prev);
  return (
    <React.Fragment>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
          <DarkBtn onClick={toggleDarkAtom}>Toggle Mode</DarkBtn>
        </HelmetProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
