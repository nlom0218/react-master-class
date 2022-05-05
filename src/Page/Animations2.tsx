import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  padding: 50px;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  column-gap: 10px;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  width: 600px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  font-size: 40px;
  align-items: center;
  justify-content: center;
`;

const boxVariants = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  },
};

const Animation2 = () => {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  const prevPlease = () => setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return i === visible ? (
            <Box
              key={i}
              variants={boxVariants}
              initial="invisible"
              animate="visible"
              exit="exit"
            >
              {i}
            </Box>
          ) : null;
        })}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
};

export default Animation2;
