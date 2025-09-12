import { Avatar, Dialog, DialogContent, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign-up.css';

const SignUp = ({ handleClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const navigate = useNavigate();

  // Hardcoded backend URL
  const BACKEND_URL = 'https://gymmanagementsystembackend-1.onrender.com';

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset errors
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError('Please enter your first name.');
      isValid = false;
    }
    if (!lastName.trim()) {
      setLastNameError('Please enter your last name.');
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError('Please enter your email.');
      isValid = false;
    }
    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    if (!isValid) return;

    const newUser = { firstName, lastName, email, phone, address, password };

    try {
      const response = await axios.post(`${BACKEND_URL}/account/register`, newUser, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('User registered:', response.data);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);

      handleClose(); // close signup popup
      navigate('/login'); // navigate to login page
    } catch (error) {
      if (error.response && error.response.data) {
        const data = error.response.data;
        if (typeof data === 'object') {
          setFirstNameError(data.firstName || '');
          setLastNameError(data.lastName || '');
          setEmailError(data.email || '');
          setPasswordError(data.password || data.message || '');
        } else {
          alert(data);
        }
      } else {
        alert('Network error or backend not reachable.');
      }
      console.error('SignUp error:', error);
    }
  };

  return (
    <div className="paper">
      <Avatar className="avatar">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" fontWeight="bold">
        Sign Up
      </Typography>

      <form className="form" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={firstNameError ? 'error' : ''}
          />
          {firstNameError && <small className="error-text">{firstNameError}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={lastNameError ? 'error' : ''}
          />
          {lastNameError && <small className="error-text">{lastNameError}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? 'error' : ''}
          />
          {emailError && <small className="error-text">{emailError}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            className={passwordError ? 'error' : ''}
          />
          {passwordError && <small className="error-text">{passwordError}</small>}
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <Dialog open={showSuccessPopup}>
        <DialogContent className="successPopup">
          <Typography variant="h6" style={{ color: 'green' }}>
            Successfully Signed Up!
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignUp;
