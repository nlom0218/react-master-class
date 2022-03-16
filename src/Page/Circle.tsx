import React from 'react';
import CircleContainer from "./CircleContainer"


const Circle = () => {
  return (<React.Fragment>
    <CircleContainer bgColor="teal" borderColor="yellow" />
    <CircleContainer bgColor="tomato" text="secondText" />
  </React.Fragment>)
}

export default Circle;

