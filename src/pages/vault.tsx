import { useState } from "react";
import Confetti from "react-confetti";
import "./Pages.css";

export default function Vault() {
  const [code, setCode] = useState<string>("");
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const correctCode = "247"; // 💗 your vault code

  const handleUnlock = () => {
    if (code === correctCode) {
      setUnlocked(true);
      setError("");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 6000);
    } else {
      setError("❌ Galat code! Try again...");
      setCode("");
    }
  };

  return (
    <div className="page home full-center padded-center">
      {showConfetti && <Confetti />}
      <div className="clue-box">
        {!unlocked ? (
          <>
            <h1>🔒 The Final Vault</h1>
            <p>
              Enter the <b>3-digit code</b> to unlock your final treasure 💎
            </p>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <input
                type="text"
                maxLength={3}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                className="quiz-input"
                placeholder="Enter code"
              />
              <button onClick={handleUnlock} className="button">
                Unlock
              </button>
            </div>

            {error && <p style={{ color: "salmon" }}>{error}</p>}
          </>
        ) : (
          <>
            <h1>💖 Vault Unlocked!</h1>
            <p>You did it! Here’s your treasure...</p>

            <img
              src="/images/test.jpg" // replace with your actual image or link
              alt="Vault Treasure"
              style={{
                width: "80%",
                borderRadius: "12px",
                marginTop: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />

            <p style={{ marginTop: "20px" }}>
              Sometimes the best treasures aren’t gold… they’re memories 💫
              Gift card number: 6002940042727937
              Card pin: 240460
            </p>
          </>
        )}
      </div>
    </div>
  );
}
