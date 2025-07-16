import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  /* Target the direct div children of Title (which are your "Visual" and "Vortex" containers) */
  & > div { /* This targets the divs that contain the H1s (Visual and Vortex) */
    display: flex; /* Keeps the letters within each word horizontal */
    flex-direction: row; /* Ensures letters are in a row */
    /* Add margin-bottom to the "Visual" div to control the space below it */
    &:first-of-type { /* This specifically targets the first div child (your "Visual" container) */
      margin-bottom: -2rem; /* Example: Move it up by 2rem. Adjust this value! */
      /* You might need to make this a negative margin to reduce the gap */
    }
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        {/* New div for "Visual" */}
        <div style={{ marginRight: '2rem' }}> {/* This style remains for horizontal spacing between words if on same line */}
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.45" // Start with a higher delay
            data-scroll-speed="4"
          >
            V
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.42" // Decreasing increment (e.g., by 0.03s)
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.39"
            data-scroll-speed="4"
          >
            s
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.36"
            data-scroll-speed="4"
          >
            u
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.33"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.30"
            data-scroll-speed="4"
          >
            l
          </motion.h1>
        </div>

        {/* New div for "Vortex" */}
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.27" // Continue decreasing
            data-scroll-speed="4"
          >
            V
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.24"
            data-scroll-speed="4"
          >
            o
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.21"
            data-scroll-speed="4"
          >
            r
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.18"
            data-scroll-speed="4"
          >
            t
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="4"
          >
            x
          </motion.h1>
        </div>

        {/* The h2 tagline remains the same */}
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          inspire. create. believe
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;