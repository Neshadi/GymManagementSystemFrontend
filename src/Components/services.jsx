import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import Group_Classes from '../Assests/Group Classes.jpg';
import Nutritional_Guidance from '../Assests/Nutritional Guidance.jpg';
import Personal_Training from '../Assests/Personal Training.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.black,
    minHeight: '555px',
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  media: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Ensure the card takes up full height
    transition: 'transform 0.3s ease', // Add transition to transform property
    '&:hover': {
      transform: 'scale(1.15)', // Scale up the card slightly on hover
    },
  },
  content: {
    flexGrow: 1, // Allow content to grow vertically
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
        <Typography variant="body1" paragraph>
          At our gym, we offer a wide range of services to help you reach your fitness goals. From personal training to group classes, nutritional guidelines have something for everyone.
        </Typography>
        
        <Grid container spacing={4}>
          {/* Personal Training */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/personal-training" style={{ textDecoration: 'none' }}> 
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  // image="https://www.bodybuilding.com/images/2020/january/what-the-best-personal-trainers-know-that-you-dont-header-830x467.jpg"
                  image={Personal_Training}
                  title="Personal Training"
                />
                <CardContent className={classes.content}>
                  <Typography variant="h6">Personal Training</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
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
                // image="https://c4.wallpaperflare.com/wallpaper/1017/46/488/group-fitness-class-located-step-wallpaper-preview.jpg"
                image={Group_Classes}
                title="Group Classes"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6">Group Classes</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
                // image="https://sites.psu.edu/crp5406passion/files/2017/10/584f0898c8c30.image-2c96lgo-300x200.jpg"
                image={Nutritional_Guidance}
                title="Nutritional Guidance"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6">Nutritional Guidance</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
