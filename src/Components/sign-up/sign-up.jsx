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
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupRightPosition, setPopupRightPosition] = useState('-1000px');
  const [popupTopPosition, setPopupTopPosition] = useState('-1000px');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset error messages
    setNameError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    // Validate fields
    if (!firstName) {
      setNameError('Please enter your full name.');
      isValid = false;
    }
    if (!email) {
      setEmailError('Please enter your email.');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const appusers = { firstName, lastName, email, phone, address, password };
    console.log(appusers);

    try {
      const response = await axios.post("http://localhost:8080/account/register", appusers, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("New User added", response.data);
      setShowSuccessPopup(true);
      setPopupRightPosition('-900px');
      setPopupTopPosition('-495px');
      setTimeout(() => {
        setShowSuccessPopup(false);
        setPopupRightPosition('-1000px');
      }, 30000);
      handleClose();
      navigate('/login');
    } catch (error) {
      if (error.response) {
        console.error("Backend Error:", error.response.data);
      } else if (error.request) {
        console.error("Network Error or No Response from Backend", error.request);
      } else {
        console.error("Unexpected Error:", error.message);
      }
    }
  };

  return (
   
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight="bold">
            Signup
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
                className={nameError ? 'error' : ''}
              />
              {nameError && <small className="error-text">{nameError}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name:</label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={nameError ? 'error' : ''}
              />
              {nameError && <small className="error-text">{nameError}</small>}
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
          <Dialog open={showSuccessPopup} style={{ right: popupRightPosition, top: popupTopPosition }}>
          <DialogContent className="successPopup">
            <Typography variant="h6" style={{ color: 'black' }}>Successfully Signed Up!</Typography>
          </DialogContent>
        </Dialog>

        </div>
  
  );
};

export default SignUp;
