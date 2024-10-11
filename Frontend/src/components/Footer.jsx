import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Container=styled.div`
    width: 100%;
    background-color: #4ccdc3;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`
const Title = styled.h2`
  font-size: 1.8;
  color: #fff;
  cursor: pointer;
`;
const Href=styled(Link)`
    all: unset;
`
export const Footer = () => {
  return (
    <Container>
      <Title><Href to={"/team"}>Meet the developers</Href></Title>
      <Title><Href to={"https://github.com/codermilind-op/MannMitra"}>Visit the Github Repository</Href></Title>
    </Container>
  )
}

