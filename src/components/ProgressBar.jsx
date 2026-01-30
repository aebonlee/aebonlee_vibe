import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 50px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const Filler = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background: linear-gradient(45deg, #FF8C00, #FFA500);
  border-radius: inherit;
  text-align: right;
  transition: width 0.4s ease-in-out;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <Filler progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
