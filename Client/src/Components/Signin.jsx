import React from 'react';
import './SignIn.css';  // Import the CSS file

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
}

export default SignIn;
