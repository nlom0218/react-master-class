import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  padding: 50px;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Gird = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  font-size: 40px;
  align-items: center;
  justify-content: center;
`;

const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animations4 = () => {
  const [id, setId] = useState<null | number>(null);
  return (
    <Wrapper>
      <Gird>
        {[1, 2, 3, 4].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n + ""}>
            {n}
          </Box>
        ))}
      </Gird>
      <AnimatePresence>
        {id ? (
          <OverLay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box layoutId={id + ""} style={{ width: 400, height: 200 }}>
              {id}
            </Box>
          </OverLay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Animations4;
