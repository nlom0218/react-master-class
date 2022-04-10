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

const myVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: { type: "spring", bounce: 0.5, delay: 0.5 },
  },
};

const Animations = () => {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
      <Box></Box>
    </Wrapper>
  );
};

export default Animations;
