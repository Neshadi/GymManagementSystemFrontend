import { Avatar, Button, Checkbox, Container, CssBaseline, Dialog, DialogContent, FormControlLabel, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useState } from 'react';
import './sign-up.css'; 

const SignUp = ({ handleClose }) => {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupRightPosition, setPopupRightPosition] = useState('-1000px');
  const [popupTopPosition, setPopupTopPosition] = useState('-1000px');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset error messages
    setNameError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    // Validate fields
    if (!fullName) {
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

    const user = { fullName, email, password };

    try {
      const response = await axios.post("http://localhost:8080/user/add", user, {
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
      }, 1000); 
      handleClose();
    } catch (error) {
      console.error("There was an error adding the user!", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Signup
        </Typography>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="full-name"
            label="Your full name"
            name="full-name"
            autoComplete="name"
            autoFocus
            value={fullName}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(nameError)}
            helperText={nameError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign Up
          </Button>
        </form>
        <Dialog open={showSuccessPopup} style={{ right: popupRightPosition, top: popupTopPosition }}>
          <DialogContent className="successPopup">
            <Typography variant="h6" style={{ color: 'black' }}>Successfully Signed Up!</Typography>
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
};

export default SignUp;
