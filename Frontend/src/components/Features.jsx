import React from 'react'
import styled from 'styled-components'
import { Piedata } from '../assets/Data';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'; 
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Container=styled.div`
    width:75%;
    min-height:80vh;
    margin:0 auto;
    display:flex;
    justify-content:center;
    gap: 6rem;
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
    text-align: center;
    font-weight: bold;
    color: #202020;
`
const Subtitle=styled.h2`
        text-align: center;
        font-size: 2rem;
        color: #666;
        margin-bottom: 1rem;
    `
    const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  `;
  
  const Tag = styled.span`
    background-color: #d1f5f5;
    text-align: center;
    color: #5c7275;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 2rem;
  `;

const config = {
    labels: ['Anxiety', 'Stress', 'ADHD', 'Depression', 'OCD', 'Loneliness', 'Self-esteem issues'],
    datasets: [
      {
        label: 'Mental Health Disorders',
        data: [20, 30, 15, 25, 10, 12, 18], // Example data values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#d41717'],
        hoverOffset: 4
      }
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      title: {
        display: true,
        text: 'Mental Health Disorders Pie Chart',
      },
    },
  };
  
export const Features = () =>{
  return(
    <>
      <Container>
        <Box><Pie data={config} options={options}/></Box>
        <Box className='text'>
        <Heading>
            We interviewed 1000 people regarding mental health disorders
        </Heading>
        <Subtitle>A majority of people suffered from several mental health disorders like</Subtitle>
        <TagWrapper>
          <Tag>Anxiety</Tag>
          <Tag>Stress</Tag>
          <Tag>ADHD</Tag>
          <Tag>Depression</Tag>
          <Tag>OCD</Tag>
          <Tag>Loneliness</Tag>
          <Tag>Self esteem issues</Tag>
        </TagWrapper>
        </Box>
        </Container>
    </>
  )
}

