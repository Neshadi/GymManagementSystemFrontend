import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import Group_Classes from '../../Assests/Group Classes.jpg';
import Nutritional_Guidance from '../../Assests/Nutritional Guidance.jpg';
import Personal_Training from '../../Assests/Personal Training.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.black,
    minHeight: '555px',
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    // fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },
  media: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Slightly transparent black background
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#fff', // White title text
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#fff', // White description text
    marginTop: theme.spacing(1),
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="services">
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          SERVICES
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#fff' }}>
          At our gym, we offer a wide range of services to help you reach your fitness goals. From personal training to group classes, nutritional guidance has something for everyone.
        </Typography>
        
        <Grid container spacing={4}>
          {/* Personal Training */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/personal-training" style={{ textDecoration: 'none' }}> 
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={Personal_Training}
                  title="Personal Training"
                />
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Personal Training
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription} component="p">
                    Get one-on-one training sessions with our certified trainers to reach your personal fitness goals faster.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          
          {/* Group Classes */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Group_Classes}
                title="Group Classes"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Group Classes
                </Typography>
                <Typography variant="body2" className={classes.cardDescription} component="p">
                  Join our group fitness classes for a fun and motivating workout experience. We offer yoga, HIIT, pilates, and more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Nutritional Guidance */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Nutritional_Guidance}
                title="Nutritional Guidance"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Nutritional Guidance
                </Typography>
                <Typography variant="body2" className={classes.cardDescription} component="p">
                  Work with our nutrition experts to create a personalized meal plan that complements your fitness routine.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
