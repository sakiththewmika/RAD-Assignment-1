import React from 'react';
import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const MainPage = () => {

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
      <Section id="about">
        <Typography variant="h2" gutterBottom>About Us</Typography>
        <Grid container rowSpacing={4} spacing={4}>
          <Grid item xs={12} md={6} display={'flex'}>
            <Img src="/about1.png" alt="aboutimg" sx={{maxWidth : {xs : '400px', sm : '450px', md : '500px'}}}  />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">History</Typography>
            <Typography variant="body1">Emerald Rentals is a leading car rental company in Sri Lanka. We have been in the business for over 20 years and have a fleet of over 100 vehicles. Our vehicles are well maintained and serviced regularly to ensure the safety and comfort of our customers. We offer a wide range of vehicles to suit every need and budget, from economy to luxury cars, SUVs, vans, and buses. Our team of experienced and professional drivers are dedicated to providing the best service to our customers. We also offer 24/7 customer support and online booking facilities for your convenience.</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Services</Typography>
            <Typography variant="body1">We offer a wide range of Sri Lanka car hire facilities ranging from economy to luxury. The fleet consists of cars, sports utility, and 4WD vehicles, vans and buses. There is also a range of classic and vintage cars available for weddings, television, cinema, commercials and other special occasions.</Typography>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'}>
            <Img src="/about2.png" alt="aboutimg" sx={{maxWidth : {xs : '400px', sm : '450px', md : '500px'}}}  />
          </Grid>
        </Grid>
        <Typography variant="h4">Our Vehicles</Typography><br />
        <Grid container spacing={4} >
          <Grid item xs={12} sm={6} md={3}>
            <Img src="/Mercedes-S-Class.jpg" alt="car1" maxWidth={'200px'} />
            <Typography variant="h6" align='center'>Luxury Cars</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Img src="landcruiser_300.jpg" alt='car2' maxWidth={'200px'} />
            <Typography variant="h6" align='center'>SUV Vehicles</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Img src="toyota-alphard.jpg" alt='car2' maxWidth={'200px'} />
            <Typography variant="h6" align='center'>Buses & Vans</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Img src="austin-sheerline-royal-limousine.jpg" alt='car2' maxWidth={'200px'} />
            <Typography variant="h6" align='center'>Classic & Vintage</Typography>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default MainPage;

