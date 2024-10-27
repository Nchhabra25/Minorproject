
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'; 
import { exampledata } from '../assets/Data';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'; 

// Keyframe for fade-out effect
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Bigbox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
  animation: ${({ fade }) => (fade ? fadeOut : 'none')} 1s ease forwards;
`;

const Chatbox1 = styled(motion.div)`
  background-color: #ffe19c;
  padding: 12px 18px;
  margin: 10px 0;
  border-radius: 20px;
  max-width: 85%;
  color:#202020;
  align-self: flex-start;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  word-wrap: break-word;
  border: 2px solid #c3c3c3;
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const Chatbox2 = styled(motion.div)`
  background-color: #dcf8c6;
  color: #202020;
  padding: 12px 18px;
  border: 2px solid #c3c3c3;
  margin: 30px 0;
  border-radius: 20px;
  max-width: 85%;
  align-self: flex-end;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

export const Demotext = () => {
  const [index, setIndex] = useState(0);    //question change state
  const [fade, setFade] = useState(false); //fade animation state

  const motionVariants = useMotion();
  const currentData = exampledata[index];

  useEffect(() => {
    const fadeDelay = 35000; // Time before fading out
    const nextQuestionDelay = 37000; // Time before next question

    // Setting time for blurring question
    const fadeTimeout = setTimeout(() => {
      setFade(true); 
    }, fadeDelay);

    // changing the question
    const nextIndexTimeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % exampledata.length);
      setFade(false); // Reset fade for the next question
    }, nextQuestionDelay);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(nextIndexTimeout);
    };
  }, [index]);

  return (
    <Bigbox fade={fade}>
      <Chatbox1
      variants={motionVariants.fadeInRightVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>{currentData.question}</Chatbox1>
      <Chatbox2
      variants={motionVariants.fadeInLeftVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <Typewriter
          key={index} 
          onInit={(typewriter) => {
            typewriter
              .typeString(`${currentData.answer}`)
              .pauseFor(2000)
              .start();
          }}
        />
      </Chatbox2>
    </Bigbox>
  );
};
