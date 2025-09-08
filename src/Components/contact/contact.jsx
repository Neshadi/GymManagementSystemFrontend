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
    const token = localStorage.getItem('token'); 
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };
    const user = { fullName, email, message };
    try {
      const response = await axios.post("http://localhost:8080/user/add", user, { headers }); 
      console.log(response.data);
      setMessageAgain('Form Submitted Successfully!');
      setTimeout(() => setMessageAgain(''), 2000);
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

        <Typography variant="body1" className="description">
          We are here to assist you! Feel free to reach out via phone, email, or 
          by submitting the form below. Our team will get back to you as soon as possible.
        </Typography>
        <br></br>
        <Grid container spacing={4}>
          {/* Form Section */}
          <Grid item  className="formContainer">
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
                required
                multiline
                rows={4}
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
                  style={{
                    textAlign: 'center',
                    color: messageAgain.includes('Successfully') ? 'green' : 'red',
                    marginTop: '16px'
                  }}
                >
                  {messageAgain}
                </Typography>
              )}
            </form>
          </Grid>

          {/* Contact Info & Map Section */}
          <Grid item  className="contactContainer">
            <div className="contactDetails">
              <div className="contactItem">
                <PhoneIcon className="icon" />
                <Typography variant="body1">Telephone: +94703546172</Typography>
              </div>
              <div className="contactItem">
                <FaxIcon className="icon" />
                <Typography variant="body1">Fax: +94117546172</Typography>
              </div>
              <div className="contactItem">
                <EmailIcon className="icon" />
                <Typography variant="body1">Email: powerzone@gmail.com</Typography>
              </div>
            </div>

            {/* Map */}
            <div className="mapContainer">
              <iframe
                title="PowerZone Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.000000000!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzQuMCJOIDc5wrA1MSc1OC4wIkU!5e0!3m2!1sen!2slk!4v1694040491490!5m2!1sen!2slk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
