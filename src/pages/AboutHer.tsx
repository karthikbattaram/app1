import { useEffect, useState } from 'react';
import './Pages.css';

const TOGETHER_SINCE = new Date('2024-11-22T12:00:00');

function getTimeSince(startDate: Date) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const total = now.getTime() - startDate.getTime();
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { years, months, days, hours, minutes, seconds };
};

const funFacts = [
    'The reason I smile',
  'Most beautiful eyes',
  'The warmest smile',
  'More street smart than anyone',
  'My C.P.U'
  
];

export default function AboutHer() {
  const [timer, setTimer] = useState(getTimeSince(TOGETHER_SINCE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getTimeSince(TOGETHER_SINCE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page full-center padded-center">
      <div>
        <h2>Making me have the biggest smile since 💕</h2>
        <div className="clock-digits">
          {/* <span>{String(timer.years).padStart(2, '0')}y</span> */}
          <span>{String(timer.months).padStart(2, '0')}mo</span>
          <span>{String(timer.days).padStart(2, '0')}d</span>
          <span>{String(timer.hours).padStart(2, '0')}h</span>
          <span>{String(timer.minutes).padStart(2, '0')}m</span>
          <span>{String(timer.seconds).padStart(2, '0')}s</span>
        </div>
        <ul className="fun-facts">
          {funFacts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
