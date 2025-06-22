import { useEffect, useState } from 'react';
import './Pages.css';

const NEXT_DATE = new Date('2025-06-30T00:00:00');

function getTimeRemaining(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Home() {
  const [countdown, setCountdown] = useState(getTimeRemaining(NEXT_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getTimeRemaining(NEXT_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page home full-center padded-center">
      <div>
        <h1>Hey my CPU 😘😘</h1>
        <p>Welcome to your own little world of magic.</p>
        <div className="digital-clock">
          <h2>Next Big Moment In...</h2>
          <div className="clock-digits">
            <span>{String(countdown.days).padStart(2, '0')}d</span>
            <span>{String(countdown.hours).padStart(2, '0')}h</span>
            <span>{String(countdown.minutes).padStart(2, '0')}m</span>
            <span>{String(countdown.seconds).padStart(2, '0')}s</span>
          </div>
        </div>
      </div>
    </div>
  );
}