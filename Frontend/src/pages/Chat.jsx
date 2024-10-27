import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  height:34vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
  a{
    all:unset;
  }
`;
export const Chat = () => {
  return (
    <Container>
      <Btn><a href=''>Run the Chatbot</a></Btn>
    </Container>
  )
}
