import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { CardData } from '../assets/Data';
export const Reviews = () => {
    // const[Num,setNum]=useState(1);
    // useEffect(() => {
    //     setTimeout(() => {
    //       setNum((prev) => prev + 1);
    //     }, 1000);
    //   }, [Num]);
    const Container=styled.div``;
    const Title=styled.h1`
        text-align: center;
        font-size: 3rem;
        color: #4ccdc3;
        margin-bottom: 1rem;
    `
    const Subtitle=styled.h2`
        text-align: center;
        font-size: 2rem;
        color: #666;
        margin-bottom: 1rem;
    `
    const Box=styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4rem;
        margin: 3rem;
    `
    const Card=styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: space-between;
        padding:20px;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
        background-color: rgba(255, 255, 255, .45);
        backdrop-filter: blur(15px);
        border-radius: 20px;
        width: 30%;
    `
    const CardContent=styled.p`
        font-size: 1.9rem;
        text-align: center;
        color: #202020;
    `
    const User=styled.p`
        font-size: 2rem;
        margin: 1rem;
        margin-left: 4rem;
        text-align: left;
        color: #3c3b3b;
        font-weight: bold;
    `
    const Date=styled.span`
        font-size: 1.5rem;
        margin-left: 4rem;
        color: #3c3b3b;
        font-weight: bold;
        text-align: left;
    `
    const Person=styled.div`
        display: flex;
        justify-content: center;
    `
    const Icon = styled.span`
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 4rem;
    color: #202020;
    
  `;
    const Text=styled.div`
    width: 80%;
`
  return (
    <Container>
      <Title>Messages Sent Every second</Title>
      <Subtitle>8 in 10 users find talking to MannMitra helpful and 80% report a mood improvement</Subtitle>
      <Box>
        
            {
                CardData.map((rev,index)=>(
                    <Card key={index}>
                    <CardContent>{rev.review}</CardContent>
                    <Person>
                    <Icon>
                    <ion-icon name="person-circle-outline" class="icon"></ion-icon>
                    </Icon>
                    <Text>
                    <User>{rev.name}</User>
                    <Date>{rev.date}</Date>
                    </Text>
                    </Person>
                    </Card>
                ))
            }
        
      </Box>
    </Container>
  )
}

