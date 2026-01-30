import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { results } from '../data/results';

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
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const LoadingText = styled.p`
  font-size: 1.5rem;
  font-family: 'Jua', sans-serif;
  color: #6c6c6c;
  height: 60vh;
  display: flex;
  align-items: center;
`;

const ResultTitle = styled.p`
  font-size: 1.3rem;
  color: #6c6c6c;
  margin-bottom: 5px;
`;

const ResultType = styled.h1`
  font-size: 3.5rem;
  color: #FF8C00;
  margin-bottom: 20px;
`;

const ResultDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  white-space: pre-wrap; /* Allow newlines in description */
`;

const KeywordContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const Keyword = styled.span`
  font-size: 1rem;
  padding: 8px 15px;
  background-color: #f1f3f5;
  border-radius: 20px;
  color: #495057;
`;

const RestartButton = styled.button`
  font-size: 1.3rem;
  padding: 15px 35px;
  border-radius: 50px;
  background: linear-gradient(45deg, #4dabf7, #3bc9db);
  color: white;
  box-shadow: 0 4px 15px rgba(77, 171, 247, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(77, 171, 247, 0.6);
  }
`;

const ResultPage = ({ result, onRestart }) => {
  const [loading, setLoading] = useState(true);
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResultData(results[result]);
      setLoading(false);
    }, 1500); // 1.5초 동안 로딩 애니메이션

    return () => clearTimeout(timer);
  }, [result]);

  if (loading) {
    return (
      <Container>
        <LoadingText>결과를 분석 중입니다...</LoadingText>
      </Container>
    );
  }

  if (!resultData) {
    return (
      <Container>
        <p>결과를 찾을 수 없습니다.</p>
        <RestartButton onClick={onRestart}>다시 시작하기</RestartButton>
      </Container>
    );
  }

  return (
    <Container>
      <ResultTitle>{resultData.title}</ResultTitle>
      <ResultType>{resultData.type}</ResultType>
      <ResultDescription>{resultData.description}</ResultDescription>
      <KeywordContainer>
        {resultData.keywords.map((keyword, index) => (
          <Keyword key={index}>{keyword}</Keyword>
        ))}
      </KeywordContainer>
      <RestartButton onClick={onRestart}>다시 시작하기</RestartButton>
    </Container>
  );
};

export default ResultPage;
