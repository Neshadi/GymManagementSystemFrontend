import { Card, CardContent, Container, Divider, Grid, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import React from 'react';
import './pricing-plan.css'; // Import the CSS file

const PricingPlan = () => {

  const plans = [
    { title: 'Basic', price: '$29/month', features: ['Access to gym equipment', 'Limited classes', 'Personal trainer available'] },
    { title: 'Standard', price: '$49/month', features: ['Access to gym equipment', 'Unlimited classes', 'Personal trainer available'] },
    { title: 'Premium', price: '$79/month', features: ['Access to gym equipment', 'Unlimited classes', 'Personal trainer available', 'Access to sauna and spa'] },
  ];

  return (
    <div className="root" id="pricing">
      <Container maxWidth="md">
        <Typography variant="h4" className="title">
          PRICING PLANS
        </Typography>
        <br></br>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item key={index}>
              <Card className="card" style={{ background: 'darkred' }}>
                <CardContent className="cardContent">
                  <Typography variant="h5" gutterBottom className="title1">{plan.title}</Typography>
                  <Typography variant="h6" className="price" style={{ color: 'yellow' }}>{plan.price}</Typography>
                  <Divider style={{ color: 'black', fontWeight: 'bold' }} />
                  <ul className="featuresList">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="featureItem">
                        <CheckIcon className="featureIcon" style={{ color: 'blue' }} />
                        <Typography style={{ textAlign: 'left' }}>{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PricingPlan;
