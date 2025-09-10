import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Expert_TrainnersImage from '../../Assests/Expert_Trainners.jpg';
import Gym_FacilityImage from '../../Assests/Gym_Facility.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.black,
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'left',
    fontWeight: 'bold',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease', // Add transition to transform property
    '&:hover': {
      transform: 'scale(1.05)', // Scale up the card slightly on hover
    },
  },
  video: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
    background: '#000',
    '& iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    transition: 'transform 0.3s ease', // Add transition to transform property
    '&:hover': {
      transform: 'scale(1.05)', // Scale up the card slightly on hover
    },
  },
  textContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
  },
  textContent: {
    maxWidth: '100%',
    margin: '0',
    textAlign: 'justify',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          WHO WE ARE
        </Typography>
        
        <Grid container spacing={4}>
          {/* Text Section */}
          <Grid item xs={12} sm={6} className={classes.textContainer}>
            <div className={classes.textContent}>
              <Typography variant="body1" paragraph>
              Welcome to our gym! At our facility, we're dedicated to supporting you on your fitness journey,
              no matter where you are in your path to wellness.Our mission is to help you achieve your fitness 
              goals by providing a supportive and motivating environment where you can thrive. Whether you're just 
              starting out on your fitness journey or you're a seasoned athlete looking to 
              reach new heights, we're here for you every step of the way.Our experienced trainers and staff are 
              committed to providing the resources, expertise, and encouragement you need to succeed.At our gym, 
              we offer a wide range of services designed to cater to all fitness levels and preferences. 
              Our state-of-the-art facility is equipped with the latest machines and weights,
              ensuring you have everything you need.
              </Typography>
              {/* <Typography variant="body1" paragraph>
                Whether you're just starting out or you're a seasoned athlete, we have the resources and expertise to help you succeed.
              </Typography> */}
            </div>
          </Grid>

          {/* Gym Facility Image */}
          <Grid item xs={12} sm={6} className={classes.imageContainer}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                // image="https://etimg.etb2bimg.com/photo/65573978.cms"
                image={Gym_FacilityImage}
                title="Gym Facility"
              />
              <CardContent style={{background:'black'}}>
                <Typography variant="h6">Our Facility</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Take a look at our modern gym facility equipped with the latest machines and weights to help you
                get the best workout experience. Our gym is designed with cutting-edge technology and top-of-the-line equipment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
         

        
          {/* Gym Trainer Image */}
          <Grid item xs={12} sm={6} className={classes.imageContainer}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                // image="https://www.fitbase.com/blog/wp-content/uploads/2020/01/the-most-influential-fitness-trainers-ever.jpg"
                image ={Expert_TrainnersImage}
                title="Our Trainers"
              />
              <CardContent style={{background:'black'}}>
                <Typography variant="h6">Expert Trainers</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Our trainers are certified professionals who are dedicated to helping you achieve your fitness goals. 
                Meet our team of experts, each bringing a wealth of knowledge, experience, and passion to support 
                you on your fitness journey.Feel free to call them or book them to retrieve unforgettable experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            {/* Text Section */}
            <Grid item xs={12} sm={6} className={classes.textContainer}>
            <div className={classes.textContent}>
              <Typography variant="body1" paragraph>
              Our state-of-the-art facility is designed to cater to all fitness levels, 
              offering a diverse range of equipment and classes to meet your individual needs and preferences. 
              Whether you prefer cardio machines, strength training equipment, or functional training tools, 
              we have everything you need to achieve your fitness goals.Our cardio section is equipped with 
              the latest treadmills, ellipticals, stationary bikes, and rowing machines, allowing you to tailor 
              your cardiovascular workout to your liking.For those focused on building strength, our weight training 
              area features a comprehensive selection of free weights, resistance machines, and squat racks.
              Additionally, our functional training zone includes kettlebells, battle ropes, medicine balls, and more, 
              providing you with the tools to enhance your functional fitness and overall athleticism.
             
               
              
              </Typography>
              {/* <Typography variant="body1" paragraph>
                Our certified trainers are here to guide you and ensure you get the most out of your workouts.
              </Typography> */}
            </div>
          </Grid>


          {/* Trainer Tips Video */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className={classes.video}>
                <iframe
                  src="https://www.youtube.com/embed/E15Q3Z9J-Zg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Trainer Tips"
                ></iframe>
              </div>
              <Typography variant="h6" style={{ marginTop: '1rem', textAlign: 'center' }}>Trainer Tips</Typography>
            </Grid>

            {/* Workout Video */}
            <Grid item xs={12} sm={6}>
              <div className={classes.video}>
                <iframe
                  src="https://www.youtube.com/embed/L_xrDAtykMI"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Full Body Workout"
                ></iframe>
              </div>
              <Typography variant="h6" style={{ marginTop: '1rem', textAlign: 'center' }}>Full Body Workout</Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
};

export default About;