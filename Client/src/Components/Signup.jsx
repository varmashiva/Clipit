import { useState } from "react";
import axios from "axios";
import "./SignIn.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    if (!email.includes("@") || password.length < 6) {
      setError("Invalid email or password (min. 6 characters).");
    } else {
      setError("");
      console.log("Signed In:", { email, password });
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>SignUp</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signin-btn">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
