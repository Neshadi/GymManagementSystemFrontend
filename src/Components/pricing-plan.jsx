import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Card, CardContent, Divider } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.black,
    minHeight:'560px',
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    width: '200px', // Set a fixed width
    height: '430px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.shape.borderRadius * 2,
    transition: 'box-shadow 0.3s ease, transform 0.3s ease', 
    '&:hover': {
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.05)',
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  title1:{
    textAlign: 'center',
  },
  price: {
    margin: theme.spacing(2, 0),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  featuresList: {
    listStyleType: 'none',
    padding: theme.spacing(2),
    margin: 0,
    textAlign: 'left',
  },
  featureItem: {
    display: 'flex',
    textAlign: 'left',
    marginBottom: theme.spacing(1),
  },
  featureIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.success.main,
    alignItems:'left'
  },
}));

const PricingPlan = () => {
  const classes = useStyles();

  const plans = [
    { title: 'Basic', price: '$29/month', features: ['Access to gym equipment', 'Limited classes', 'Personal trainer available'] },
    { title: 'Standard', price: '$49/month', features: ['Access to gym equipment', 'Unlimited classes', 'Personal trainer available'] },
    { title: 'Premium', price: '$79/month', features: ['Access to gym equipment', 'Unlimited classes', 'Personal trainer available', 'Access to sauna and spa'] },
  ];

  return (
    <div className={classes.root} id="pricing">
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          PRICING PLANS
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item key={index}>
              <Card className={classes.card} style={{background:'darkred'}}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom className={classes.title1}>{plan.title}</Typography>
                  <Typography variant="h6" className={classes.price} style={{color:'yellow'}}>{plan.price}</Typography>
                  <Divider style={{color:'black',fontWeight:'bold'}}/>
                  <ul className={classes.featuresList}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className={classes.featureItem}>
                        <CheckIcon className={classes.featureIcon} style={{color:'blue'}} />
                        <Typography style={{textalign:'left'}}>{feature}</Typography>
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
