import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Link, Outlet } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  const [name, setName] = useState(''); // State for the name input field
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString()); // State for current time


  useEffect(() => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setWelcomeMessage(`Good ${greeting}!`);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000); // Set to 1000 milliseconds for 1 second interval

    return () => clearInterval(timeInterval); // Cleanup interval on component unmount
  }, []); // Empty dependency array to run the effect once on mount

  function formatTime(date) {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    hours = String(hours).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  // useEffect(() => {
  //   const targetDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000); // 10 days from now
  //   const timer = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = targetDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       clearInterval(timer);
  //       setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //     } else {
  //       setCountdown({ days, hours, minutes, seconds });
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer); // Cleanup timer on component unmount
  // }, []); // Empty dependency array to ensure it runs only once

  return (
    <Container maxWidth={'false'} sx={{ maxWidth: 1280 }} >
      <Section id="home">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} mt={6}>
            <Typography variant="h2" gutterBottom>{welcomeMessage}</Typography>
            <Typography variant="h3" gutterBottom>Welcome {name}!</Typography>
            <Box mb={2}>
              <TextField
                label="Your Name"
                variant="outlined"
                width="50%"
                height="50%"
                onKeyUp={(e) => setName(e.target.value)}
              />
            </Box>
            <Typography variant="h4" gutterBottom fontWeight={'bold'} >Drive the dream with Emerald Rentals</Typography>
            <Typography variant="body1" gutterBottom pr={5}>
            We offer a wide range of vehicles, including economy and luxury cars, SUVs, vans, and buses, ensuring you find the perfect match for your needs and budget.
            </Typography>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} color="primary" sx={{ marginTop: 4 }}>Contact Us</Button>
            </Link>
            <Typography variant='h6' gutterBottom mt={2} fontWeight={'bold'} >
               {currentTime}
              </Typography>
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
