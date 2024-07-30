import { Button, Container, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import './footer.css';

const useStyles = makeStyles((theme) => ({
  navbarButton: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer-root">
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Site Map
            </Typography>
            <div className="footer-footerLinks">
              <Typography variant="body1">
                <Button color="inherit" className={classes.navbarButton} href="#home">Home</Button>
              </Typography>
              <Typography variant="body1">
                <Button color="inherit" className={classes.navbarButton} href="#about">About Us</Button>
              </Typography>
              <Typography variant="body1">
                <Button color="inherit" className={classes.navbarButton} href="#services">Services</Button>
              </Typography>
              <Typography variant="body1">
                <Button color="inherit" className={classes.navbarButton} href="#timetable">Schedule</Button>
              </Typography>
              <Typography variant="body1">
                <Button color="inherit" className={classes.navbarButton} href="#pricing">Pricing</Button>
              </Typography>
              <Typography variant="body1">
                <Button color="inherit" className={classes.navbarButton} href="#contact">Contact</Button>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              We are Sri Lanka’s first and only medically oriented gym, revolutionizing fitness and wellness.
            </Typography>
            <div className="footer-socialIcons">
              <IconButton aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <div className="footer-contactDetails">
              <Typography variant="body1" className="footer-contactText">
                Telephone: +94703546172
              </Typography>
              <Typography variant="body1" className="footer-contactText">
                Fax: +94117546172
              </Typography>
              <Typography variant="body1" className="footer-contactText">
                Email: powerzone@gmail.com
              </Typography>
              <Typography variant="body1" className="footer-contactText">
                Address: 123, Fitness Ave, Colombo, Sri Lanka
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className="footer-footerBottom">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Your Gym. All rights reserved.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
