import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Typography, Container, Dialog, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: theme.spacing(1),
  },
  successPopup: {
    backgroundColor: '#FFFF00',
    borderRadius: '20px',
    
    
},



}));

const SignUp = ({ handleClose }) => {
  const classes = useStyles();
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
    // console.log(user);

    try {
      const response = await axios.post("http://localhost:8080/user/add", user, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(user);
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
      <div className={classes.paper}>
        <Avatar className={classes.avatar} style={{color:'white',background:'red'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Signup
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            className={classes.submit}
            style={{color:'white',background:'red'}}
          >
            Sign Up
          </Button>
        </form>
        <Dialog open={showSuccessPopup}  style={{ right: popupRightPosition, top: popupTopPosition }}>
          <DialogContent className={classes.successPopup}>
            <Typography variant="h6" style={{ color: 'black' }}>Successfully Signed Up!</Typography>
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  );
};

export default SignUp;
