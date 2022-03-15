import React from "react";
import styled from "styled-components";

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
  </React.Fragment>
  );
}

export default App;
