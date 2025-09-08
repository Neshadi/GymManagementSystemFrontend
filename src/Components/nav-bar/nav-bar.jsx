import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../login/login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff5722",
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
    display: "flex",
    alignItems: "center",
  },
  navbarButtons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  navbarButton: {
    marginLeft: theme.spacing(2),
  },
  dialogContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0, // Removed padding here
  },
  dialogPaper: {
    borderRadius: "10px",
    height: "90vh",
    width: "60vh",
    padding: 0, // Removed padding here
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleLoginOpen = () => {
    setOpen(true);
  };

  const handleLoginClose = () => {
    console.log("Closing login popup");
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#000000ff" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <FitnessCenterIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <FitnessCenterIcon style={{ marginRight: "10px" }} />
              PowerZone
            </Typography>
            <div className={classes.navbarButtons}>
              <Link to="/" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>
                  Home
                </Button>
              </Link>
              <Link to="/about" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>
                  About Us
                </Button>
              </Link>
              <Link to="/services" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>
                  Services
                </Button>
              </Link>
              <Link to="/time-table" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>
                  Schedule
                </Button>
              </Link>
              <Link to="/pricing-plan" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>
                  Pricing
                </Button>
              </Link>
              <Link to="/contact" className={classes.link}>
                <Button color="inherit" className={classes.navbarButton}>
                  Contact
                </Button>
              </Link>
              <Button color="inherit" className={classes.navbarButton} onClick={handleLoginOpen}>
                Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Dialog
          open={open}
          onClose={handleLoginClose}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle className={classes.dialogTitle} disableTypography>
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
                onClick={handleLoginClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <LoginPage handleLoginClose={handleLoginClose} />
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
