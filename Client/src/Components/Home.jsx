import React from 'react'
import './Home.css';

function Home() {
  return (
    <div>
      <div className="container">
      <header className="header">
        <div className="logo">
          <div className="logo-img"></div>
          {/* <h1>Logo</h1> */}
        </div>
        <div className="auth-buttons">
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
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
    </div>
  )
}

export default Home
