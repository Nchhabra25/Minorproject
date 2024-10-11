// src/components/StatisticsClone.js
import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: left;
  flex: 1 1 calc(50% - 1rem); /* Two cards per row */
  max-width: 48%;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
  background-color: rgba(255, 255, 255, .45);
  backdrop-filter: blur(15px);
  min-height: 250px;

  /* Media query to make cards stack on smaller screens */
  @media (max-width: 768px) {
    flex: 1 1 100%; /* Full-width for mobile */
    max-width: 100%;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 3rem;
  color: #4ccdc3;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const Tag = styled.span`
  background-color: #edf7f7;
  text-align: center;
  color: #5c7275;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 1.5rem;
`;

// Main Component
export const Statistics = () => {
  return (
    <Container>
      {/* Card 1 */}
      <Card>
        <Title>92% users feel better after their first conversation</Title>
        <Subtitle>For 40% of cases that’s the only help needed.</Subtitle>
        <TagWrapper>
          <Tag>Anxiety</Tag>
          <Tag>Stress</Tag>
          <Tag>Navigating relationships</Tag>
          <Tag>Depression</Tag>
          <Tag>Emotional</Tag>
          <Tag>Work burnout</Tag>
          <Tag>Loneliness</Tag>
          <Tag>Low confidence</Tag>
        </TagWrapper>
      </Card>

      {/* Card 2 */}
      <Card>
        <Title>Available 24/7</Title>
        <Subtitle>No appointments or waiting rooms. Instant replies even on weekends and at 4 A.M.</Subtitle>
        <Subtitle><strong>34%</strong> of sessions happen after midnight, when no traditional services are available.</Subtitle>
      </Card>

      {/* Card 3 */}
      <Card>
        <Title>No stigma. Completely anonymous.</Title>
        <Subtitle>When talking to AI, people are not afraid of being judged and address their problems earlier.</Subtitle>
        <Subtitle><strong>21%</strong> of users said they would not have anyone to talk to except AI.</Subtitle>
      </Card>

      {/* Card 4 */}
      <Card>
        <Title>Safe to Use</Title>
        <Subtitle>AI detects when a person needs more than a chatbot and redirects them to appropriate resources, such as a therapist or hotlines.</Subtitle>
        <Subtitle>Unlike other chatbots, <strong>MannMitra</strong> is trained on thousands of "clinical hours" to follow evidence-based approach</Subtitle>
      </Card>
    </Container>
  );
};
