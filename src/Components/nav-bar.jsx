import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import LoginPage from './login';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff5722',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  navbarButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  navbarButton: {
    marginLeft: theme.spacing(2),
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleLoginOpen = () => {
    setOpen(true);
  };

  const handleLoginClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FitnessCenterIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <FitnessCenterIcon style={{ marginRight: '10px' }} />
              PowerZone
            </Typography>
            <div className={classes.navbarButtons}>
              <Button color="inherit" className={classes.navbarButton} href="#home">Home</Button>
              <Button color="inherit" className={classes.navbarButton} href="#about">About Us</Button>
              <Button color="inherit" className={classes.navbarButton} href="#services">Services</Button>
              <Button color="inherit" className={classes.navbarButton} href="#timetable">Schedule</Button>
              <Button color="inherit" className={classes.navbarButton} href="#pricing">Pricing</Button>
              <Button color="inherit" className={classes.navbarButton} href="#contact">Contact</Button>
              <Button color="inherit" className={classes.navbarButton} onClick={handleLoginOpen}>Login</Button>
            </div>
          </Toolbar>
        </AppBar>
        <Dialog open={open} onClose={handleLoginClose} aria-labelledby="form-dialog-title">
          <DialogTitle disableTypography className={classes.dialogTitle}>
            <IconButton style={{ color: 'black' }} onClick={handleLoginClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <LoginPage handleClose={handleLoginClose} />
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
