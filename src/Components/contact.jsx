import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, TextField, Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FaxIcon from '@material-ui/icons/Print';
import EmailIcon from '@material-ui/icons/Email';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.default,
    minHeight: '560px',
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '20px',
  },
  formContainer: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  contactContainer: {
    width: '50%',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(4),
    },
    marginLeft: theme.spacing(0, 28),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(2, 0),
  },
  contactDetails: {
    marginTop: theme.spacing(8),
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  contactLabel: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 200px', // Set a fixed width for the label
  },
  contactValue: {
    fontSize: '1.5rem',
    flexGrow: 2, // Allow value to take remaining space
    textAlign: 'left', // Ensure text aligns left
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageAgain, setMessageAgain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit1 = async (e) => {
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
    }
  };

  return (
    <div className={classes.root} id="contact">
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          CONTACT US
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} className={classes.formContainer}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Name"
                name="name"
                fullWidth
                required
                className={classes.textField}
                value={fullName}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                fullWidth
                required
                className={classes.textField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Message"
                name="message"
                fullWidth
                multiline
                rows={4}
                required
                className={classes.textField}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                style={{ color: "white", background: 'red' }}
                fullWidth
                className={classes.submitButton}
                onClick={handleSubmit1}
              >
                Submit
              </Button>
              {messageAgain && (
                <p style={{ textAlign: 'center', color: messageAgain.includes('Successfully') ? 'green' : 'red' }}>
                  {messageAgain}
                </p>
              )}
            </form>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.contactContainer}>
            <div className={classes.contactDetails}>
              <div className={classes.contactItem}>
                <Typography variant="body1" className={classes.contactLabel}>
                  <PhoneIcon className={classes.icon} />
                  Telephone:
                </Typography>
                <Typography variant="body1" className={classes.contactValue}>
                  +94703546172
                </Typography>
              </div>
              <div className={classes.contactItem}>
                <Typography variant="body1" className={classes.contactLabel}>
                  <FaxIcon className={classes.icon} />
                  Fax:
                </Typography>
                <Typography variant="body1" className={classes.contactValue}>
                  +94117546172
                </Typography>
              </div>
              <div className={classes.contactItem}>
                <Typography variant="body1" className={classes.contactLabel}>
                  <EmailIcon className={classes.icon} />
                  Email:
                </Typography>
                <Typography variant="body1" className={classes.contactValue}>
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
