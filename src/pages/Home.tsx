import {  useState } from 'react';
import Confetti from 'react-confetti';
import './Pages.css';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [step, setStep] = useState(() => localStorage.getItem('quiz-complete') ? 3 : 0);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const questions = [
    {
      prompt: "A land of bargains, chaos, and cheer, where every “just one” turns to ten, my dear. Clothes so cheap, we lose control — what’s this place that steals our soul?",
      answer: "venky"
    },
    {
      prompt: "When your thoughts go morbid morbid and life feels like a tragic show, what’s the first thing he does to try and make you glow?",
      answer: "crack a joke"
    },
    {
      prompt: "Of all the rental cars, some cars were fast, some made us late, but which one was perfect for our quiet fate?",
      answer: "ertiga"
    }
  ];

  const handleSubmit = () => {
    if (input.trim().toLowerCase() === questions[step].answer) {
      if (step === questions.length - 1) {
        localStorage.setItem('quiz-complete', 'true');
        setStep(3);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 6000);
      } else {
        setStep(step + 1);
        setInput('');
        setError('');
      }
    } else {
      setError('Nope! That’s not it. Try again 💭');
    }
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="page home full-center padded-center">
        <div className="clue-box">
          <h1>Happy Anniversary 💖</h1>
          <p>I wish I could do this in person once, but lets goo your treasure hunt starts here.</p>
          <p>Answer each question to unlock what comes next 💌</p>
          <br />
          {step < 3 ? (
            <>
              <h2>🔍 Clue {step + 1}</h2>
              <p>{questions[step].prompt}</p>
              <input
                type="text"
                placeholder="Your answer here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="quiz-input"
              />
              <button onClick={handleSubmit} className="button">Submit</button>
              {error && <p style={{ color: 'salmon' }}>{error}</p>}
            </>
          ) : (
            <>
              <h2>🎉 Oho aapke ghutne kaafi tez nikle 😁😁</h2>
              <b>Ab go read some compliments<br/>
kabhi kabhi sweet words ke beech mein bhi<br/>
kuch secrets chhupe hote hain 😘<br/>
</b>
            </>
          )}
        </div>
      </div>
    </>
  );
}