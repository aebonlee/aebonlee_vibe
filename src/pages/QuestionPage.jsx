import React from 'react';
import styled, { keyframes } from 'styled-components';
import { questions } from '../data/questions';
import ProgressBar from '../components/ProgressBar';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const QuestionNumber = styled.p`
  font-size: 1.5rem;
  font-family: 'Jua', sans-serif;
  color: #FF8C00;
  margin-bottom: 10px;
`;

const QuestionText = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  line-height: 1.4;
`;

const ChoiceButton = styled.button`
  display: block;
  width: 100%;
  font-size: 1.3rem;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: #f8f9fa;
  border: 2px solid #e9ecef;
  color: #495057;
  
  &:hover {
    background-color: #e9ecef;
    border-color: #dee2e6;
    transform: translateY(-2px);
  }
`;

const QuestionPage = ({ answers, onAnswer }) => {
  const currentQuestionIndex = answers.length;
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <Container>
      <ProgressBar progress={progress} />
      <QuestionNumber>Q{currentQuestionIndex + 1}</QuestionNumber>
      <QuestionText>{question.question}</QuestionText>
      <div>
        {question.choices.map((choice, index) => (
          <ChoiceButton key={index} onClick={() => onAnswer(choice.type)}>
            {choice.text}
          </ChoiceButton>
        ))}
      </div>
    </Container>
  );
};

export default QuestionPage;
