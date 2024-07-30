import {
  Avatar, Box, Button, Checkbox, Container, CssBaseline, Dialog, DialogContent, DialogTitle, FormControlLabel, Grid, IconButton, Link, TextField, Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useState } from 'react';
import HomePage from './home';
import './login.css';
import SignUp from './sign-up';

const LoginPage = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/user/findAll');
      const users = response.data;
      const user = users.find(
        (user) => (user.email === email || user.fullName === email) && user.password === password
      );

      if (user) {
        handleClose(); // Close login dialog
        // Navigate to home page
        return <HomePage />;
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleSignupOpen = () => {
    setOpen(true);
  };

  const handleSignupClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ padding: '0px ' }} id="login">
      <CssBaseline />
      <div className="paper" style={{ padding: '0px ' }}>
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form className="form" noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your username or email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" className="submit">
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleSignupOpen}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleSignupClose} aria-labelledby="form-dialog-title">
        <DialogTitle disableTypography>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <IconButton style={{ color: 'white' }} onClick={handleSignupClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <SignUp handleClose={handleSignupClose} />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default LoginPage;
