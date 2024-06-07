import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, IconButton,Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:  theme.palette.common.default,
    color: theme.palette.common.white,
    padding: theme.spacing(4, 0),
  },
  socialIcons: {
    '& > *': {
      marginRight: theme.spacing(1),
      color: theme.palette.common.white,
    },
  },
  footerLinks: {
    marginTop: theme.spacing(2),
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  contactDetails: {
    marginTop: theme.spacing(2),
  },
  contactText: {
    fontSize: '1rem',
    marginBottom: theme.spacing(1),
  },
  footerBottom: {
    marginTop: theme.spacing(4),
    // borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Site Map
            </Typography>
            <div className={classes.footerLinks}>
              <Typography variant="body1">
                {/* <Link to="/" className={classes.link}>Home</Link> */}
                <Button color="inherit" className={classes.navbarButton} href="#home">Home</Button>
              </Typography>
              <Typography variant="body1">
                {/* <Link to="/about" className={classes.link}>About Us</Link> */}
               
                <Button color="inherit" className={classes.navbarButton} href="#about">About Us</Button>
              </Typography>
              <Typography variant="body1">
                {/* <Link to="./services" className={classes.link}>Services</Link> */}
                <Button color="inherit" className={classes.navbarButton} href="#services">Services</Button>
              </Typography>
              <Typography variant="body1">
                {/* <Link to="./time-table" className={classes.link}>Schedule</Link> */}
                <Button color="inherit" className={classes.navbarButton} href="#timetable">Schedule</Button>
              </Typography>
              <Typography variant="body1">
                {/* <Link to="./pricing-plan" className={classes.link}>Pricing</Link> */}
                <Button color="inherit" className={classes.navbarButton} href="#pricing">Pricing</Button>
              </Typography>
              <Typography variant="body1">
                {/* <Link to="./contact" className={classes.link}>Contact</Link> */}
                <Button color="inherit" className={classes.navbarButton} href="#contact">Contact</Button>
              </Typography>
              <Typography variant="body1">
                {/* <Link to="./login" className={classes.link}>Login</Link> */}
                
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
            <div className={classes.socialIcons}>
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
            <div className={classes.contactDetails}>
              <Typography variant="body1" className={classes.contactText}>
                Telephone: +94703546172
              </Typography>
              <Typography variant="body1" className={classes.contactText}>
                Fax: +94117546172
              </Typography>
              <Typography variant="body1" className={classes.contactText}>
                Email: powerzone@gmail.com
              </Typography>
              <Typography variant="body1" className={classes.contactText}>
                Address: 123, Fitness Ave, Colombo, Sri Lanka
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.footerBottom}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Your Gym. All rights reserved.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
