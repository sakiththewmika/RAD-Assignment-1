import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to UniQuest!');

  useEffect(() => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setWelcomeMessage(`Good ${greeting}!`);
  }, []);

  const Img = styled('img')({
    width: '100%', // Adjusted for responsiveness
    height: 'auto',
    objectFit: 'fill',
    itemAlign: 'right',
    justifyContent: 'center',
    margin: 'auto'
  });

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
            <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>Get Started</Button>
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