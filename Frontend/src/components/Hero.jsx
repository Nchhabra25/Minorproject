import React from "react";
import styled from "styled-components";
const Container=styled.div`
    width:75%;
    min-height:80vh;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
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
const Heading=styled.h1`
    font-size: 44px;
    font-weight: bold;
    color: #202020;
`
const Btn=styled.button`
  background-color: transparent; //new;
  height:5rem;
  border-radius:10px;
  text-align: center;
  padding: 1.2rem;
  font-size: 2rem;
  font-weight: bold;
  border:3px solid #4ccdc3;

  cursor:pointer;
  &:hover{
    background-color: #4ccdc3;
    text-shadow:.5px .5px black;
    color:white;
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;

export const Hero = () => {
  return (
    <Container>
        <Box className='text'>
        <Heading>
            The artificial intelligence that works like a Therapist
        </Heading>
        <Btn>Talk to Us</Btn>
        </Box>
        <Box>
           
        </Box>
    </Container>
  )
}

