import React from "react";
import styled, { keyframes } from "styled-components";

const Wapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`

const Text = styled.div`
  color: ${props => props.theme.textColor};
`

function App() {
  return (<Wapper>
    <Text>Hello</Text>
  </Wapper>
  );
}

export default App;
