import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

export default function Lock({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const SECRET = 'PrincessLovesYou';

  const handleUnlock = () => {
    if (input === SECRET) {
      localStorage.setItem('unlocked', 'true');
      onUnlock();
      navigate('/');
    } else {
      alert('Wrong code 😢');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('unlocked') === 'true') {
      onUnlock();
    }
  }, [onUnlock]);

  return (
    <div className="page full-center padded-center">
      <div className="lock-box">
        <h2>🔒 Enter the Secret Code</h2>
        <input
          type="password"
          className="lock-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button" onClick={handleUnlock}>Unlock</button>
      </div>
    </div>
  );
}
