import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

const Img = styled('img')({
  width: '100%', // Adjusted for responsiveness
  height: 'auto',
  objectFit: 'fill',
  itemAlign: 'right',
  justifyContent: 'center',
  margin: 'auto'
});

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to Emerald Rentals!');
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setWelcomeMessage(`Good ${greeting}!`);
  }, []);

  useEffect(() => {
    const targetDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000); // 10 days from now
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <Container maxWidth={'false'} sx={{ maxWidth: 1280 }} >
      <Section id="home">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>{welcomeMessage}</Typography>
            <Typography variant="h3" gutterBottom>Drive the dream with Emerald Rentals</Typography>
            <Typography variant="h6" gutterBottom pr={5}>
              We offer a diverse fleet of vehicles, including economy and luxury cars, SUVs, vans, and buses, ensuring you find the perfect match for your needs and budget.
            </Typography>
            <Typography variant="h6" mt={4}>
              Countdown: {countdown.days} days {countdown.hours} hours {countdown.minutes} minutes {countdown.seconds} seconds
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Get Started</Button>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'}>
            <Img src="background.png" alt="mainimg" sx={{ maxWidth: { xs: '400px', sm: '500px', md: '600px' } }} />
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Home;
