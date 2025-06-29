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
      prompt: "I have four wheels, no engine. Cary you through long days of doing absolutely nothing and your boyfriend is not allowed to forget about me, what am I?",
      answer: "wheelchair"
    },
    {
      prompt: "He folds logic into spirals.Doubts come easy, even when love is loud.He trusts you. He just debates with his own head.What’s this mental sport?",
      answer: "overthinking"
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
          <h1>🎂 Happy Birthday C.P.U 💖</h1>
          <p>It kinda kills me I cant do this in person, but this is not just a page — it's the start of a little treasure hunt curated just for you.</p>
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
              <h2>🎉 You did it! Smartass</h2>
              <p>Solve this to unlock the next step.... 😉<br/>
              <b>Some pages show pictures.<br/>
Some pages tell stories.<br/>
One page? It tells you — who you are, through my eyes.<br/>
Go there.<br/>
</b>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}