import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  padding: 50px;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
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

const Box3 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box4 = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Svg = styled.svg`
  width: 200px;
  height: 200px;
  path {
    stroke: white;
    stroke-width: 2;
  }
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

const box3Var = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "50%",
  },
  drag: {},
};

const svg = {
  start: { fill: "rgba(255, 255, 255, 0)", pathLength: 0 },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

const Animations = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-200, 1200], [-360, 360]);
  const gradient = useTransform(
    x,
    [-200, 0, 1200],
    [
      "linear-gradient(135deg, rgb(0, 171, 238), rgb(0, 32, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 143), rgb(0, 238, 12)",
    ]
  );

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box variants={myVars} initial="start" animate="end" />
      <Box2 variants={boxVar} initial="start" animate="end">
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
      </Box2>
      <Box3 variants={box3Var} whileHover="hover" whileTap="click" />
      <BiggerBox ref={biggerBoxRef}>
        <Box4
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={box3Var}
          whileDrag="drag"
        />
      </BiggerBox>
      <Box3 drag="x" dragSnapToOrigin style={{ x, rotateZ, scale }}></Box3>
      {/* <Box3 style={{ scale }}></Box3> */}
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 3 },
          }}
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        ></motion.path>
      </Svg>
    </Wrapper>
  );
};

export default Animations;
