import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from './login';

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
    backgroundColor: 'transparent',

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
        <AppBar position="static" >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FitnessCenterIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <FitnessCenterIcon style={{ marginRight: '10px' }} />
              PowerZone
            </Typography>
            <div className={classes.navbarButtons}>
            <Link to="/" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>Home</Button>
              </Link>
              <Link to="/about" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>About Us</Button>
              </Link>
              <Link to="/services" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>Services</Button>
              </Link>
              <Link to="/time-table" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>Schedule</Button>
              </Link>
              <Link to="/pricing-plan" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>Pricing</Button>
              </Link>
              <Link to="/contact" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>Contact</Button>
              </Link>
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