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
  Dialog,
  DialogContent,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import LoginPage from "../login/login";
import "./nav-bar.css"; // import CSS file

const theme = createTheme({
  palette: {
    primary: { main: "#2196f3" },
    secondary: { main: "#ff5722" },
  },
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const navLinks = [
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Schedule", path: "/time-table" },
    { text: "Pricing", path: "/pricing-plan" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          <Link to="/" className="navbar-link logo-link">
            <FitnessCenterIcon style={{ marginRight: "8px" }} />
            <Typography variant="h6" className="navbar-title">
              PowerZone
            </Typography>
          </Link>

          {/* Desktop Links */}
          <div className="navbar-buttons">
            {navLinks.map((link) => (
              <Link to={link.path} key={link.text} className="navbar-link">
                <Button color="inherit">{link.text}</Button>
              </Link>
            ))}
            <Button color="inherit" onClick={handleLoginOpen}>
              Login
            </Button>
          </div>

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <div className="drawer-list">
          <Box display="flex" justifyContent="flex-end" padding="8px">
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

      {/* Login Popup */}
      <Dialog
        open={loginOpen}
        onClose={handleLoginClose}
        maxWidth="xs"
        fullWidth
      >
      <DialogContent>
          <LoginPage handleLoginClose={handleLoginClose} />
      </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default Navbar;
