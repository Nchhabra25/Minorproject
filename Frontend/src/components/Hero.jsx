import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'; 
import { Demotext } from "./Demotext";
import { useAuth } from "../Context";

const Container=styled(motion.div)`
    width:85%;
    min-height:73vh;
    margin:4rem auto;
    padding: 20px;
    border-radius: 30px;
    background-color:  #c8c1f8;
    border-radius: 30px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap: 50px;
    .text{
      @media (max-width: 575px) {
      }
    }
    @media (max-width: 575px) {
      flex-direction: column-reverse;
      width: 100%;
    }
`
const Box = styled.div`
  width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    position: relative;
    /* border: 2px solid red; */
    @media (max-width: 575px) {
      width:100%;
      text-align: center;
      margin: auto;
    }
    &.text{
        margin-left: auto;
    }
`;
const Heading=styled(motion.h1)`
    font-size: 44px;
    font-weight: bold;
    color: #202020;
    text-shadow: 0 0 4px #fff;
    
`
const Btn=styled(motion.button)`
  height:5rem;
  border-radius:10px;
  text-align: center;
  padding: 1.2rem;
  color:white;
  font-size: 2rem;
  font-weight: bold;
  border:3px solid #FF6F61;
  background-color: #FF6F61;
    a{
      all: unset;
    }
  cursor:pointer;
  &:hover{
    background-color: transparent;
    text-shadow:.5px .5px black;
    color:black;
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;

export const Hero = () => {
  const motionVariants = useMotion();
  const {isLoggedIn}=useAuth();
  return (
    <Container
    variants={motionVariants.fadeInBottomVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}>
        <Box className='text'>
        <Heading
        variants={motionVariants.fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}>
            The artificial intelligence that works like a Therapist
        </Heading>
        <Btn
        variants={motionVariants.fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}>
          <a href={isLoggedIn?'./chat':'./login'}>
          Talk to Us</a></Btn>
        </Box>
        <Box>
           <Demotext/>
        </Box>
    </Container>
  )
}

