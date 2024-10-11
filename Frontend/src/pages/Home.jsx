import React from 'react'
import { Hero } from '../components/Hero'
import { Statistics } from '../components/Statistics'
import { Reviews } from '../components/Reviews'
import styled from 'styled-components'
import { Features } from '../components/Features'
const Heading=styled.h1`
  margin-top: 3rem;
    font-size: 44px;
    text-align: center;
    font-weight: bold;
    color: #202020;
`
const Subtitle=styled.h2`
        margin: 3rem;
        text-align: center;
        font-size: 2rem;
        color: #666;
        margin-bottom: 1rem;
    `
const Btn=styled.button`
background-color: transparent; //new;
height:5rem;
border-radius:10px;
margin-top: 3rem;
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
const Container = styled.div`
  width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    position: relative;
    margin: auto;
    padding: 20px;
    /* border: 2px solid red; */
    @media (max-width: 575px) {
      width:100%;
      text-align: center;
      margin: auto;
    }
`;

export const Home = () => {
  return (
    <>
      <Hero/>
      <Statistics/>
      <Reviews/>
      <Features/>
      <Container>
    <Heading>So what are you waiting for?</Heading>
    <Subtitle>Start your journey towards better mental health today</Subtitle>
    <Btn>Chat with us now</Btn>
    </Container>
    </>
  )
}

