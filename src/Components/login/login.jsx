import { Avatar, Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../sign-up/sign-up';
import SignUp from '../sign-up/sign-up';
import './login.css';


const Login = ({handleLoginClose}) => {
  // State variables for form data and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupRightPosition, setPopupRightPosition] = useState('-1000px');
  const [popupTopPosition, setPopupTopPosition] = useState('-1000px');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const appusers = { email,password };
    console.log(appusers);

    try {
      const response = await axios.post("http://localhost:8080/account/login", appusers, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("New User added", response.data);
      localStorage.setItem('token', response.data.token); 
      setShowSuccessPopup(true);
      setPopupRightPosition('-900px');
      setPopupTopPosition('-495px'); 
      setTimeout(() => {
        setShowSuccessPopup(false);
        setPopupRightPosition('-1000px'); 
      }, 15000); 
      handleLoginClose();
      navigate('/');
    } catch (error) {
      if (error.response) {
        // Backend returned an error response
        console.error("Backend Error:", error.response.data);
      } else if (error.request) {
        // No response received
        console.error("Network Error or No Response from Backend", error.request);
      } else {
        console.error("Unexpected Error:", error.message);
      }
    }
  };
  const handleSignupOpen = () => {
    setOpen(true);
  };
  const handleSignupClose = () => {
    setOpen(false);
  };
 

  return (
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
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="links">
          <a href="/forgot-password" className="link">Forgot Password?</a>
          {/* <a href="/sign-up" className="link" onClick={handleSignupOpen}>Sign Up</a> */}
          
        </div>
        <Button color="inherit"  onClick={handleSignupOpen}>
                Don't have an account <br></br>Signup
          </Button>
        <Dialog
          open={open}
          onClose={handleSignupClose}
          aria-labelledby="form-dialog-title"
          style={{
            padding: '0px',
            // backgroundColor: 'black',
            borderRadius: '10px',
            height: "100vh",
            width: "70vh",
            margin: 'auto',
           
          }}
          
        >
          <DialogTitle disableTypography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton
                style={{ color: "red" }}
                onClick={handleSignupClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent style={{  overflowX: 'hidden', overflowY: 'auto' }} >
            <SignUp handleClose={handleSignupClose} />
          </DialogContent>
        </Dialog>
        <Dialog open={showSuccessPopup} style={{ right: popupRightPosition, top: popupTopPosition }}>
          <DialogContent className="successPopup">
            <Typography variant="h6" style={{ color: 'green' }}>Successfully Logged in!</Typography>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Login;
