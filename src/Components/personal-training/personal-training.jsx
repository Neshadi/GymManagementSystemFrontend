import { Box, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './personal-training.css';

const PersonalTraining = () => {
  const testimonials = [
    {
      comment: "John's training program has completely transformed my fitness level. I feel stronger and more confident!",
      client: 'Alexandria'
    },
    {
      comment: "Emil's nutrition advice and weight loss program have helped me lose 15 pounds in just 2 months!",
      client: 'Peter'
    },
    {
      comment: "Michael's HIIT sessions are intense but incredibly effective. I've never felt fitter!I bless for her to be better",
      client: 'Nichola'
    },
    {
      comment: "Jessic's approach to strength training is both challenging and rewarding. Highly recommend him!",
      client: 'Mary'
    },
    {
      comment: "Daniel's expertise in nutrition has been a game-changer for my diet and overall health.Highly recommended",
      client: 'Iorin'
    },
    {
      comment: "Alexandra's functional training has improved my athletic performance significantly.God bless you madam",
      client: 'Jossapin'
    }
  ];

  return (
    <Container className="personal-training-root">
      <Typography variant="h4" className="personal-training-title" gutterBottom>
        Personal Training
      </Typography>

      <Typography variant="body1" paragraph>
      Our personal training programs are crafted to help you reach your fitness goals efficiently and effectively. Each program is tailored to your individual needs and objectives, ensuring a personalized experience that maximizes results. Whether you're aiming to lose weight, build muscle, improve endurance, or simply enhance your overall health, our certified trainers are here to guide you every step of the way.
      </Typography>

      {/* Testimonials Section */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="testimonial-card">
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "{testimonial.comment}"
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    - {testimonial.client}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
          <li>Personal Training Sessions</li><br></br>
          <li>Group Training Sessions</li><br></br>
          <li>Online Coaching</li><br></br>
        </ul>
      </Box>
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
        Specialized Programs
        </Typography>
        <Typography variant="body1" paragraph>
        In addition to general fitness, we offer specialized programs for various fitness levels and interests, including:
        </Typography>
        <ul>
          <li>Strength Training and Conditioning</li><br></br>
          <li>HIIT (High-Intensity Interval Training)</li><br></br>
          <li>Functional Training</li><br></br>
          <li>Nutrition and Weight Loss</li><br></br>
          <li>Sports Performance</li><br></br>
          <li>Rehabilitation and Injury Prevention</li><br></br>
        </ul>
      </Box>
      {/* Media Section */}
      <Box className="personal-training-section">
        {/* <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Media
        </Typography> */}
        <Typography variant="body1" paragraph>
          Check out some of our training videos and images:
        </Typography>
        <Grid container spacing={4}>
          {/* Example Video */}
          <Grid item xs={12} sm={6} md={4}>
            <div className="personal-training-video">
              <iframe
                src="https://www.youtube.com/embed/XtM6z_hH4XE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Training Video"
              ></iframe>
            </div>
          </Grid>
          {/* Add more videos/images */}
        </Grid>
      </Box>
    </Container>
  );
};

export default PersonalTraining;
