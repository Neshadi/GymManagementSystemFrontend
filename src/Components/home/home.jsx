import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import gymVideo from '../../Assests/Gym1.mp4';


const useStyles = makeStyles((theme) => ({
  heroContent: {
  position: 'relative',
  backgroundColor: '#000', // Use black directly
  padding: theme.spacing(8, 0, 6),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0, 4),
  },
},
  heroVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0, // Ensure the video is behind the text
  },
  textContent: {
    position: 'relative',
    zIndex: 1,
    // textAlign: 'left', 
    // color: theme.palette.common.white, 
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
   
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  
  },
  description: {
    // color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  button: {
    // backgroundColor: 'red', // Custom button color
    // '&:hover': {
    //   backgroundColor: 'darkred', // Custom hover color
    // },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      padding: theme.spacing(1, 2),
    },
    // color:'white !important'
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="homepage">
      <div className={classes.heroContent} id="home">
        <video autoPlay loop muted className={classes.heroVideo}>
          <source src={gymVideo} type="video/mp4" />
        </video>
        <Container maxWidth="sm" className={classes.textContent}>
          <Typography component="h1" variant="h2" className={classes.title} gutterBottom style={{ color: 'yellow', textAlign: 'left' }}>
            EElevate Your Fitness. Transform Your Life.
          </Typography>

          <Typography variant="h5" className={classes.description} paragraph style={{color:'white'}}>
            We provide top-notch healthcare and fitness services to help you achieve your wellness goals.
          </Typography>
          <div>
            <Button variant="contained" className={classes.button} href="#demolist" style={{color:'white ',background: isHovered ? 'blue' : 'red',fontWeight:'bold'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
              Learn More
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
