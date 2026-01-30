import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import { questions } from './data/questions';

function App() {
  const [page, setPage] = useState('start'); // 'start', 'question', 'result'
  const [answers, setAnswers] = useState([]);
  const [mbtiResult, setMbtiResult] = useState('');

  const handleStart = () => {
    setPage('question');
  };

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (newAnswers.length === questions.length) {
      calculateResult(newAnswers);
      setPage('result');
    }
  };

  const calculateResult = (currentAnswers) => {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    currentAnswers.forEach(answer => {
      counts[answer]++;
    });

    let result = '';
    result += counts.E > counts.I ? 'E' : 'I';
    result += counts.S > counts.N ? 'S' : 'N';
    result += counts.T > counts.F ? 'T' : 'F';
    result += counts.J > counts.P ? 'J' : 'P';

    setMbtiResult(result);
  };

  const handleRestart = () => {
    setPage('start');
    setAnswers([]);
    setMbtiResult('');
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {page === 'start' && <StartPage onStart={handleStart} />}
        {page === 'question' && (
          <QuestionPage
            answers={answers}
            onAnswer={handleAnswer}
          />
        )}
        {page === 'result' && <ResultPage result={mbtiResult} onRestart={handleRestart} />}
      </Wrapper>
    </>
  );
}

// App.jsx is a special file, so we avoid styled-components here for clarity.
// We will create a Wrapper styled-component in a separate file or use inline styles if simple.
// For now, let's define a simple wrapper style in a less intrusive way.
// A better approach would be a Layout component.
const Wrapper = ({ children }) => (
  <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }}>
    {children}
  </div>
);


export default App;