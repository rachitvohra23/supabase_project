import { useState } from "react";
import { useLoginHook } from "../../hooks/useLoginHook";
import { useNavigate } from "react-router-dom";
import google from "../../assets/images/googlelogo.jpg";
import "../../assets/css/App.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { onLogin } = useLoginHook();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      await onLogin(email, password);
      navigate("/login-success");
    } catch (err) {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">
          Welcome back! Please enter your details.
        </p>
        {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
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
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me for 30 days</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>

          <button type="button" className="btn btn-google">
            <img src={google} alt="Google logo" className="google-icon" />
            Sign in with Google
          </button>
        </form>

        <p className="signup-prompt">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <div className="graphic-container">
        <div className="purple-circle"></div>
      </div>
    </div>
  );
}
