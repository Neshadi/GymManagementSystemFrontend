import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SignUp from './sign-up';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import HomePage from './home';

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  avatar: {
    // margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = ({ handleClose }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/user/findAll');
      const users = response.data;
      const user = users.find((user) => (user.email === email || user.fullName === email) && user.password === password);

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
    <Container component="main" maxWidth="xs"   style={{ padding:'0px '}} id='login'>
      <CssBaseline />
      <div className={classes.paper} style={{ padding:'0px '}}>
        <Avatar className={classes.avatar} style={{color:'white',background:'red'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" fontWeight="bold"  >
          Login
        </Typography>
        {error && (<Typography color="error">{error}</Typography>)}
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            <IconButton style={{ color: 'black' }} onClick={handleSignupClose} aria-label="close">
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
