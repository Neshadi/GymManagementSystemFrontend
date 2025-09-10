import { Box, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './personal-training.css';

const PersonalTraining = () => {
  const testimonials = [
    { comment: "John's training program has completely transformed my fitness level. I feel stronger and more confident!", client: 'Alexandria' },
    { comment: "Emil's nutrition advice and weight loss program helped me lose 15 pounds in 2 months!", client: 'Peter' },
    { comment: "Michael's HIIT sessions are intense but incredibly effective. I've never felt fitter!", client: 'Nichola' },
    { comment: "Jessic's approach to strength training is both challenging and rewarding. Highly recommend!", client: 'Mary' },
    { comment: "Daniel's expertise in nutrition has been a game-changer for my diet and overall health.", client: 'Iorin' },
    { comment: "Alexandra's functional training has improved my athletic performance significantly.", client: 'Jossapin' }
  ];

  return (
    <Container className="personal-training-root">
      <Typography variant="h4" className="personal-training-title" gutterBottom>
        Personal Training
      </Typography>

      <Typography variant="body1" paragraph className="personal-training-intro">
        Our personal training programs are crafted to help you reach your fitness goals efficiently and effectively. Each program is tailored to your individual needs, ensuring a personalized experience that maximizes results.
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
                  <Typography variant="body1" className="testimonial-comment">
                    "{testimonial.comment}"
                  </Typography>
                  <Typography variant="body2" className="testimonial-client">
                    - {testimonial.client}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <br></br>
      {/* Training Packages */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Training Packages
        </Typography>
        <Typography variant="body1" paragraph>
          We offer various training packages to suit your needs:
        </Typography>
        <ul className="training-list">
          <li>Personal Training Sessions</li>
          <li>Group Training Sessions</li>
          <li>Online Coaching</li>
        </ul>
      </Box>

      {/* Specialized Programs */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Specialized Programs
        </Typography>
        <ul className="training-list">
          <li>Strength Training & Conditioning</li>
          <li>HIIT (High-Intensity Interval Training)</li>
          <li>Functional Training</li>
          <li>Nutrition & Weight Loss</li>
          <li>Sports Performance</li>
          <li>Rehabilitation & Injury Prevention</li>
        </ul>
      </Box>

      {/* Media Section */}
      <Box className="personal-training-section">
        <Typography variant="h5" className="personal-training-section-title" gutterBottom>
          Training Videos
        </Typography>
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="personal-training-video">
            <iframe
              src="https://www.youtube.com/embed/XtM6z_hH4XE"
              title="Training Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="personal-training-video">
            <iframe
              src="https://www.youtube.com/embed/IA3f7qAL0A0"              
              title="Training Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="personal-training-video">
            <iframe
              src="https://www.youtube.com/embed/FRdCsZSIg8k"
              title="Training Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
      </Grid>

      </Box>
    </Container>
  );
};

export default PersonalTraining;
