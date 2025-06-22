// src/App.tsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lock from './pages/Lock';
import Compliments from './pages/Compliments';
// import LoveNotes from './pages/LoveNotes';
import GiftShop from './pages/GiftShop';
import AboutHer from './pages/AboutHer';
import NavBar from './components/NavBar';

export default function App() {
  const [isLocked, setIsLocked] = useState(localStorage.getItem('unlocked') !== 'true');

  if (isLocked) {
    return <Lock onUnlock={() => setIsLocked(false)} />;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/lovenotes" element={<LoveNotes />} /> */}
        <Route path="/compliments" element={<Compliments />} />
        <Route path="/giftshop" element={<GiftShop />} />
        <Route path="/abouther" element={<AboutHer />} />
      </Routes>
    </>
  );
}
