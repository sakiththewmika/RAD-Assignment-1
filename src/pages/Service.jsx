import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const Services = () => {

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
      <section id="about">
        <Grid container rowSpacing={4} spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Services</Typography>
            <Typography variant="body1">We offer a wide range of Sri Lanka car hire facilities ranging from economy to luxury. The fleet consists of cars, sports utility, and 4WD vehicles, vans and buses. There is also a range of classic and vintage cars available for weddings, television, cinema, commercials and other special occasions.</Typography>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'}>
            <Img src="/about2.png" alt="aboutimg" sx={{maxWidth : {xs : '400px', sm : '450px', md : '500px'}}}  />
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default Services;