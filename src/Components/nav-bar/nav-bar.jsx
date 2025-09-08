import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import LoginPage from "../login/login";
import { makeStyles } from "@material-ui/core/styles";

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
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  navbarButtons: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none", // hide buttons on small screens
    },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block", // show hamburger only on small screens
    },
  },
  drawerList: {
    width: 250,
    [theme.breakpoints.down("xs")]: {
      width: "100%", // full screen drawer on extra-small devices
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Detect screen size
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Schedule", path: "/time-table" },
    { text: "Pricing", path: "/pricing-plan" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#000000ff" }}>
          <Toolbar>
            <FitnessCenterIcon style={{ marginRight: "10px" }} />
            <Typography variant="h6" className={classes.title}>
              PowerZone
            </Typography>

            {/* Desktop buttons */}
            <div className={classes.navbarButtons}>
              {navLinks.map((link) => (
                <Link to={link.path} key={link.text} className={classes.link}>
                  <Button color="inherit">{link.text}</Button>
                </Link>
              ))}
              <Button color="inherit" onClick={handleLoginOpen}>
                Login
              </Button>
            </div>

            {/* Hamburger icon for mobile */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                className={classes.menuIcon}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* Drawer for mobile menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <div className={classes.drawerList} role="presentation">
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navLinks.map((link) => (
                <ListItem
                  button
                  key={link.text}
                  component={Link}
                  to={link.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
              <ListItem button onClick={handleLoginOpen}>
                <ListItemText primary="Login" />
              </ListItem>
            </List>
          </div>
        </Drawer>

        {/* Login Dialog */}
        {loginOpen && <LoginPage handleLoginClose={handleLoginClose} />}
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
