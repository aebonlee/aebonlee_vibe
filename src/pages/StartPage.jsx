import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #4a4a4a;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c6c6c;
  margin-bottom: 40px;
`;

const StartButton = styled.button`
  font-size: 1.5rem;
  padding: 15px 40px;
  border-radius: 50px;
  background: linear-gradient(45deg, #FF8C00, #FFA500);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 165, 0, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 165, 0, 0.6);
  }
`;

const StartPage = ({ onStart }) => {
  return (
    <Container>
      <Title>MBTI VIBE TEST</Title>
      <Subtitle>나의 진짜 성격 유형을 찾아보세요!</Subtitle>
      <StartButton onClick={onStart}>검사 시작하기</StartButton>
    </Container>
  );
};

export default StartPage;
