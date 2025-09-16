import { useState } from 'react'
import './global.css'
import { QUESTIONS } from './data/QUESTIONS';
import Quiz from './components/quiz/Quiz'
import Result from './components/result/Result';
import ProgressBar from './components/progressbar/ProgressBar';

function App() {

   

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (choiceId: string) => {
    const currentQuestion = QUESTIONS[currentIndex];

    if (choiceId === currentQuestion.answerId) {
      setScore(score + 1);
    }

    setAnswers([...answers, choiceId]);

    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
      
    }
  }

  return (
    <>
      <h1>Quiz</h1>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
        {!finished ? (
          <>
            <ProgressBar current={currentIndex} total={QUESTIONS.length} />
            <Quiz
              question={QUESTIONS[currentIndex]}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <Result score={score} total={QUESTIONS.length} answers={answers} />
        )}
      </div>
    </>
  );
}

export default App
