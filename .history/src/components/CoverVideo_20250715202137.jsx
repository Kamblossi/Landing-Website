import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
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
  flex-direction: column; /* This is causing the words to stack vertically */
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  /* 
    Apply flex to the direct div children if you want "Visual" and "Vortex" to be on the same line.
    If you want them stacked vertically (as per your screenshot), leave this out or
    ensure your inner divs are block elements or flex items of a column container.
    Given the screenshot, the default styling for Title's div children is likely
    allowing them to break lines. If you intend for "Visual" and "Vortex" to be on
    separate lines, the current Title's flex-direction: column correctly handles
    the stacking of the two motion.divs.
    If you want "Visual" and "Vortex" side-by-side after the "pull together":
    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap; /* Allows wrapping on smaller screens */
    }
  */

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

// Framer Motion Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // Overall delay before children start animating
      staggerChildren: 0.3, // Stagger between direct children of Title (the "Visual" div, "Vortex" div, and h2)
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }, // Simple fade-in for individual letters
};

const CoverVideo = () => {
  // Initialize controls for the "Visual" and "Vortex" div wrappers
  const visualDivControls = useAnimation();
  const vortexDivControls = useAnimation();

  // Define the "pull together" animation
  const pullTogetherAnimation = async () => {
    // We use Promise.all to animate them concurrently for a simultaneous "squeeze" effect.
    await Promise.all([
      // Animate "Vortex" upwards
      vortexDivControls.start({
        y: "-50px", // Move Vortex up. Adjust this value to control the final gap.
        transition: {
          type: "spring",
          stiffness: 150, // Adjust stiffness for how "strong" the spring is
          damping: 10, // Adjust damping for how quickly it settles and the amount of bounce
          mass: 0.8, // Adjust mass for inertia
          restDelta: 0.001, // Small value to ensure it settles precisely
        },
      }),
      // Animate "Visual" downwards slightly (optional, can be 0 or smaller value)
      visualDivControls.start({
        y: "50px", // Move Visual down. Adjust this value.
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 10,
          mass: 0.8,
          restDelta: 0.001,
        },
      }),
    ]);
  };

  useEffect(() => {
    // Calculate the delay for triggering the "pull together" animation.
    // This should be AFTER the initial reveal of "Visual Vortex" is complete.
    // Base delay: Title's delayChildren (5s)
    // Plus stagger for the two word divs (2 * 0.3s = 0.6s)
    // Plus a buffer for the internal letter fade-in + extra pause.
    const totalInitialAnimationTimeMs = 5000 + (2 * 300) + 700; // 5s + 0.6s + 0.7s (buffer) = 6300ms

    const timer = setTimeout(() => {
      pullTogetherAnimation();
    }, totalInitialAnimationTimeMs);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []); // Run this effect only once on component mount

  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        {/* Changed to motion.div and added animate prop with controls.
            Removed variants={item} from these parent divs as they are now
            imperatively controlled for the "pull together" animation.
            Their initial appearance is still affected by Title's staggerChildren. */}
        <motion.div animate={visualDivControls} style={{ marginRight: "2rem" }}>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.45"
            data-scroll-speed="4"
          >
            V
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.42"
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
        </motion.div>

        {/* Changed to motion.div and added animate prop with controls */}
        <motion.div animate={vortexDivControls}>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.27"
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
        </motion.div>

        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          inspire. create. belive
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;