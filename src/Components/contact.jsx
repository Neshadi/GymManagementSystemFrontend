import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FaxIcon from '@material-ui/icons/Print';
import axios from 'axios';
import React, { useState } from 'react';
import './contact.css';

const ContactUs = () => {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageAgain, setMessageAgain] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = { fullName, email, message };
    try {
      const response = await axios.post("http://localhost:8080/user/add", user, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      setMessageAgain('Form Submitted Successfully!');
      setTimeout(() => {
        setMessageAgain('');
      }, 2000);
    } catch (error) {
      console.error("There was an error adding the user!", error);
      setMessageAgain('Submission failed. Please try again.');
    }
  };

  return (
    <div className="root" id="contact">
      <Container maxWidth="md">
        <Typography variant="h4" className="title">
          CONTACT US
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Name"
                fullWidth
                required
                className="textField"
                value={fullName}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Email"
                fullWidth
                required
                className="textField"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Message"
                fullWidth
                multiline
                rows={4}
                required
                className="textField"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                style={{ color: "white", background: 'red' }}
                fullWidth
                className="submitButton"
              >
                Submit
              </Button>
              {messageAgain && (
                <Typography
                  style={{ textAlign: 'center', color: messageAgain.includes('Successfully') ? 'green' : 'red', marginTop: '16px' }}
                >
                  {messageAgain}
                </Typography>
              )}
            </form>
          </Grid>
          <Grid item xs={12} sm={6} className="contactContainer">
            <div className="contactDetails">
              <div className="contactItem">
                <Typography variant="body1" className="contactLabel">
                  <PhoneIcon className="icon" />
                  Telephone:
                </Typography>
                <Typography variant="body1" className="contactValue">
                  +94703546172
                </Typography>
              </div>
              <div className="contactItem">
                <Typography variant="body1" className="contactLabel">
                  <FaxIcon className="icon" />
                  Fax:
                </Typography>
                <Typography variant="body1" className="contactValue">
                  +94117546172
                </Typography>
              </div>
              <div className="contactItem">
                <Typography variant="body1" className="contactLabel">
                  <EmailIcon className="icon" />
                  Email:
                </Typography>
                <Typography variant="body1" className="contactValue">
                  powerzone@gmail.com
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
