import { Container, IconButton, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-root">
      <Container maxWidth="lg">
        <div className="footer-container">
          {/* Site Map */}
          <div className="footer-item">
            <Typography variant="h6" gutterBottom className="footer-title">
              Site Map
            </Typography>
            <div className="footer-footerLinks">
              <Link to="/home" className="navbarButton">Home</Link>
              <Link to="/about" className="navbarButton">About Us</Link>
              <Link to="/services" className="navbarButton">Services</Link>
              <Link to="/time-table" className="navbarButton">Schedule</Link>
              <Link to="/pricing-plan" className="navbarButton">Pricing</Link>
              <Link to="/contact" className="navbarButton">Contact</Link>
            </div>
          </div>

          {/* About Us */}
          <div className="footer-item">
            <Typography variant="h6" gutterBottom className="footer-title">
              About Us
            </Typography>
            <Typography variant="body1" className="aboutUsText">
              Welcome to the pioneering force in fitness and wellness in Sri Lanka. 
              We proudly stand as the country’s first and only medically oriented gym, 
              dedicated to transforming the landscape of fitness through a unique, health-focused approach.
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
          </div>

          {/* Contact */}
          <div className="footer-item">
            <Typography variant="h6" gutterBottom className="footer-title">
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-footerBottom">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} PowerZone. All rights reserved.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
