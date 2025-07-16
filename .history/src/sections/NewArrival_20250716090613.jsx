import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/11.webp';
import img2 from '../assets/Images/12.webp';
import img3 from '../assets/Images/13.webp';
import img4 from '../assets/Images/14.webp';

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;
  z-index: 11;
  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 60vw;
    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

// NEW STYLED COMPONENT FOR LEFT-SIDE TEXT
const LeftText = styled.div`
  width: 20%; /* Same width as the right text for consistency */
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 10rem; /* Adjusted to be below the main title */
  left: 1rem; /* Aligned with the main title's left */
  z-index: 11; /* Same z-index as the right text */

  @media (max-width: 64em) {
    top: 8rem; /* Adjust for smaller desktop/tablet screens */
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 48em) {
    display: none; /* Hide on small screens, same as the right Text */
  }
`;


const Text = styled.div` /* This is now specifically for the RIGHT-SIDE text */
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0; /* Keep it at top right or adjust if needed for vertical balance */
  right: 0;
  z-index: 11;
  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  h2 {
  }
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Our Services
      </Title>

      {/* NEW LEFT-SIDE TEXT CONTENT */}
      <LeftText data-scroll data-scroll-speed="-4">
        [cite_start]Personal & Family Stories: [cite: 1]<br />
        [cite_start]Covers: Individual portraits, headshots, family photography, maternity, newborn, personal milestones. [cite: 1]<br />
        [cite_start]Storytelling Angle: Capturing personal journeys, connections, and intimate life chapters. [cite: 1]
        <br /><br />
        [cite_start]Event Narratives: [cite: 1]<br />
        [cite_start]Covers: Weddings, concerts, corporate events, parties, celebrations. [cite: 1]<br />
        [cite_start]Storytelling Angle: Documenting the unfolding drama, joy, and key moments of significant occasions. [cite: 1]
      </LeftText>

      <Container ref={ScrollingRef}>
        <Photos img={img1} name="Personal & Family Stories" />
        <Photos img={img2} name="Event Narratives" />
        <Photos img={img3} name="Brand & Commercial Tales" />
        <Photos img={img4} name="Specialized Visual Journeys" />
      </Container>

      {/* EXISTING RIGHT-SIDE TEXT CONTENT */}
      <Text data-scroll data-scroll-speed="-4">
        [cite_start]Brand & Commercial Tales: [cite: 1]<br />
        [cite_start]Covers: Product photography, corporate photography (staff, premises), real estate, campaigns, advertisements. [cite: 1]<br />
        [cite_start]Storytelling Angle: Building compelling brand identities and showcasing offerings through visual narratives. [cite: 1]
        <br /><br />
        [cite_start]Specialized Visual Journeys: [cite: 1]<br />
        [cite_start]Covers: Outdoor/scenery, specific artistic projects, unique indoor spaces, and potentially videography if you want to keep it as a distinct sub-category here. [cite: 1]<br />
        [cite_start]Storytelling Angle: Exploring unique themes, environments, or complex visual projects that tell a specific, often immersive, story. [cite: 1]
      </Text>
    </Section>
  );
};

export default NewArrival;