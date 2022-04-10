import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  padding: 100px;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`;

const myVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: { type: "spring", bounce: 0.5, delay: 0.5 },
  },
};

const boxVar = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const circleVar = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {},
  },
};

const Animations = () => {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
      <Box2 variants={boxVar} initial="start" animate="end">
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
      </Box2>
    </Wrapper>
  );
};

export default Animations;
