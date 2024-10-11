import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';
import Logo from '../assets/Logo';
import { Link, NavLink } from 'react-router-dom';
// const Section=styled.section`
//     width:100vw;
//     background-color: rgb(201, 233, 236);
//     position: sticky;
//     padding-top:1.5rem; //new
// `
const NavBar=styled.nav`
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 6rem;
    margin: 0 auto;
    backdrop-filter: blur(15px);
    margin-top:1.5rem; 
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
    background-color: rgba(255, 255, 255, .45); //new
    border-radius: 20px; //new
    padding: 10px;  //new
    border: 1px solid rgba(255, 255, 255, .25);
    /* border-bottom: 1px solid lightgray;  */
    @media (max-width: 790px) { 
      height:${props=>props.click?'13rem':'5rem'};
  }
  .mobile{
    display: none;
  }
  @media (max-width: 500px) {
    .desktop{
      display: none;
    }
    .mobile{
      display: inline-block;
    }
  }
  
`
const Menu = styled.ul`
  list-style: none;
  font-weight: bold;
  
  display: flex;
  @media (max-width: 790px) {
    flex-direction: column;
    position: relative;
    text-align: center;
    top:1.7rem;
    right: 5px;
    transform: ${props=>props.click?'translateY(0)':'translateY(-300%)'};
    transition: 0.3s ease-in all;
  }
  
  
`;


const MenuItem = styled.li`
    font-size: 1.8rem;
    margin: 0 1.2rem;
    color: #202020;
    text-decoration: none;
    cursor: pointer;
    position: relative; 
    &::after{
      content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: rgb(32, 32, 32);
    transition: width 0.3s ease 0s;
    }
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    &:hover::after {
        width: 100%;
    }
    @media (max-width:450px){
      font-size: 0.9em;
      margin-top:5px;
      margin-right: 2rem;
    }
    
`;

const SNavLink=styled(NavLink)`
    all: unset;
    
`;

const Hamburger = styled.div`
  width: ${props=>props.click?'2rem':'1.5rem'};
  height: 2px;
  background: #202020;
  position: absolute;
  top: ${props=>props.click?'2rem':'2.2rem'};
  left:50%;
  transform: ${props=>props.click?'translateX(-50%) rotate(90deg)':'translateX(-50%) rotate(0)'};
  transition: all 0.3s ease;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width:790px) {
    display:flex;
    
  }
  @media (max-width:500px){
    left:73%;
  }
  &::after,&::before{
    content: ' ';
    width:${props=>props.click?'1rem':'1.5rem'};
    right:${props=>props.click?'-1px':'0'};
    height: 2px;
    background: #202020;
    position:absolute;
  }
  &::after{
    top:0.5rem;
    top:${props=>props.click?'0.3rem':'0.5rem'};
    transform: ${props=>props.click?' rotate(-40deg)':' rotate(0)'};
  }
  &::before{
    bottom:${props=>props.click?'0.4rem':'0.5rem'};
    transform: ${props=>props.click?' rotate(40deg)':' rotate(0)'};
  }
`;

const Btn=styled.button`
  background-color: transparent; //new;
  height:3.5rem;
  border-radius:20px;
  width:10rem;
  text-align: center;
  font-size: 1.4rem;
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
export const Navbar=()=>{
    const [click, setClick] = useState(false);

    return(
        <>
        {/* <Section> */}
            <NavBar click={click}>
                <SNavLink to="./">
                <Logo/>
                </SNavLink>
          <Hamburger click={click} onClick={()=>setClick(!click)}/>
          <Menu click={click}>
                    <MenuItem ><SNavLink to="/">Home</SNavLink></MenuItem>
                    <MenuItem> <SNavLink to='./login'>Login</SNavLink></MenuItem>
                    <MenuItem> <SNavLink to='/team'>Our Team</SNavLink></MenuItem>
                    <MenuItem>
                      <div className='mobile'>
                      <SNavLink to='/login'><Btn  text="Login"/></SNavLink> 
                      </div>     
                    </MenuItem>
                </Menu>
                <div className='desktop'>
                <Btn><SNavLink to='/login'/>Chat Now</Btn>
                </div>     
            </NavBar>

        {/* </Section> */}
        </>
    );
}
