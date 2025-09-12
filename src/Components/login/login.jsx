import { Avatar, Button, Dialog, DialogContent, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../sign-up/sign-up';
import './login.css';

const Login = ({ handleLoginClose }) => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const navigate = useNavigate();

  // Backend URL
  const BACKEND_URL = "https://gymmanagementsystembackend-1.onrender.com";

  // Handlers
  const handleLogin = async (event) => {
    event.preventDefault();
    const appusers = { email, password };

    try {
      const response = await axios.post(`${BACKEND_URL}/account/login`, appusers, {
        headers: { "Content-Type": "application/json" }
      });

      localStorage.setItem('token', response.data.token); 
      setShowSuccessPopup(true);

      // Hide success popup after 3 seconds
      setTimeout(() => setShowSuccessPopup(false), 3000);

      handleLoginClose(); // Close login popup
      navigate('/'); // Navigate home
    } catch (err) {
      if (err.response) setError(err.response.data || "Login failed");
      else setError("Network error. Please try again.");
    }
  };

  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  return (
    <Dialog open={true} onClose={handleLoginClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <div className="login-container">
          <div className="login-form">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>

            <div className="links">
              <a href="/forgot-password" className="link">Forgot Password?</a>
            </div>

            <Button color="inherit" onClick={handleSignupOpen}>
              Don't have an account? Sign Up
            </Button>
          </div>
        </div>

        {/* Signup Dialog */}
        <Dialog open={signupOpen} onClose={handleSignupClose} maxWidth="xs" fullWidth>
          <DialogContent>
            <SignUp handleClose={handleSignupClose} />
          </DialogContent>
        </Dialog>

        {/* Success Popup */}
        {showSuccessPopup && (
          <Typography style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>
            Successfully Logged in!
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Login;
