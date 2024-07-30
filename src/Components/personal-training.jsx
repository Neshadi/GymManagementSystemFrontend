import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './personal-training.css';

const PersonalTraining = () => {
  return (
    <Container className="personal-training-root">
      <Typography variant="h4" className="personal-training-title" gutterBottom>
        Personal Training
      </Typography>

      <Typography variant="body1" paragraph>
        Our personal training programs are designed to help you achieve your fitness goals with personalized plans, one-on-one sessions, and continuous support from our certified trainers.
      </Typography>

      {/* Trainer Profiles Section */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Meet Our Trainers
        </Typography>
        <Grid container spacing={4}>
          {/* Example Trainer */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="personal-training-card">
              <CardMedia
                className="personal-training-media"
                image="https://www.bodybuilding.com/images/2020/january/what-the-best-personal-trainers-know-that-you-dont-header-830x467.jpg"
                title="Trainer 1"
              />
              <CardContent>
                <Typography variant="h6">John Smith</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Certified personal trainer with specialization in strength training and conditioning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more trainers as needed */}
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Testimonials
        </Typography>
        <Typography variant="body1" paragraph>
          "John's training program has completely transformed my fitness level. I feel stronger and more confident than ever before!" - Client A
        </Typography>
        {/* Add more testimonials */}
      </Box>

      {/* Training Packages Section */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Training Packages
        </Typography>
        <Typography variant="body1" paragraph>
          We offer various training packages to suit your needs, including:
        </Typography>
        <ul>
          <li>1-on-1 Personal Training Sessions</li>
          <li>Group Training Sessions</li>
          <li>Online Coaching</li>
          {/* Add more packages */}
        </ul>
      </Box>

      {/* Media Section */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Media
        </Typography>
        <Typography variant="body1" paragraph>
          Check out some of our training videos and images:
        </Typography>
        <Grid container spacing={4}>
          {/* Example Video */}
          <Grid item xs={12} sm={6} md={4}>
            <video controls className="personal-training-video">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          {/* Add more videos/images */}
        </Grid>
      </Box>
    </Container>
  );
};

export default PersonalTraining;
