import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <div className="nav-item">
          <span role="img" aria-label="home">🏠</span>
          <span className="nav-text">Home</span>
        </div>
      </Link>
      {/* <Link to="/lovenotes">
        <div className="nav-item">
          <span role="img" aria-label="love notes">💌</span>
          <span className="nav-text">Notes</span>
        </div>
      </Link> */}
      <Link to="/compliments">
        <div className="nav-item">
          <span role="img" aria-label="compliments">✨</span>
          <span className="nav-text">Praise</span>
        </div>
      </Link>
      {/* <Link to="/gallery">
        <div className="nav-item">
          <span role="img" aria-label="gallery">🖼️</span>
          <span className="nav-text">Gallery</span>
        </div>
      </Link> */}
      <Link to="/giftshop">
        <div className="nav-item">
          <span role="img" aria-label="gifts">🎁</span>
          <span className="nav-text">Gifts</span>
        </div>
      </Link>
      <Link to="/abouther">
        <div className="nav-item">
          <span role="img" aria-label="about">📊</span>
          <span className="nav-text">About</span>
        </div>
      </Link>
    </nav>
  );
}
