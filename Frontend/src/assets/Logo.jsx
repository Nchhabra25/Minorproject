import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText=styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: 4em;
    color: #ffb5b5;
    text-shadow:2px 3px 3px #000;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const SLink=styled(Link)`
    all: unset;
`;
const Logo = () => {
  return (
    <>
      <LogoText>
        <SLink to='/'>
        MannMitra.
        </SLink>
      </LogoText>
    </>
  )
}

export default Logo