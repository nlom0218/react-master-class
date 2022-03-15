import React from "react";
import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 200px;
  height: 200px;
`

const Circle = styled(Box)`
  border-radius: 50%;
`

const Btn = styled.div`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`

const Input = styled.input.attrs({ required: true, maxLength: "10" })`
  background-color: tomato;
`

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
`

const BoxContainer = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 3s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    opacity: 0;
    &:hover {
      font-size: 80px;
    }
    :active {
      opacity: 1;
      transition: opacity 1s ease;
    }
  }
`

function App() {
  return (<React.Fragment>
    <Father as="header">
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
    <Btn>Log in</Btn>
    <Btn as="a" href="/">Log in</Btn>
    <Input />
    <Input />
    <Input />
    <Input />
    <Input />
    <Input />
    <BoxContainer>
      <span>🥰</span>
    </BoxContainer>
  </React.Fragment>
  );
}

export default App;
