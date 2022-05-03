import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  padding: 50px;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Animation2 = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
    </Wrapper>
  );
};

export default Animation2;
