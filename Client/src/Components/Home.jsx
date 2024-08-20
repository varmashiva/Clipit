import circle from "../assets/circle.png";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    // creating container div
    <div className="container">
      <header className="header">
        <div className="logo">
          <div className="logo-img"></div>
        </div>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <button className="btn">Sign Up</button>
          <Link to="/recordings">
            <img src={circle} alt="Profile Icon" className="user-icon" />
          </Link>
        </div>
      </header>

      <main className="main-content">
        <div className="left-section">
          <div className="text-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <button className="start-recording-btn">Start Recording</button>
        </div>

        <div className="right-section">
          <div className="reference-video">
            Reference video on how to record
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
