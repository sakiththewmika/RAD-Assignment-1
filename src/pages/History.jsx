import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';


const Img = styled('img')({
    width: '100%', // Adjusted for responsiveness
    height: 'auto',
    objectFit: 'fill',
    itemAlign: 'right',
    justifyContent: 'center',
    margin: 'auto'
});

const History = () => {

    return (
        <Container maxWidth={'false'} sx={{ maxWidth: 1280 }} >
            <Grid container rowSpacing={4} spacing={4}>
                <Grid item md={12}>
                    <Typography variant="h3">History</Typography>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'}>
                    <Img src="/about1.png" alt="aboutimg" sx={{ maxWidth: { xs: '350px', sm: '400px', md: '450px' } }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1">Emerald Rentals is a leading car rental company in Sri Lanka. We have been in the business for over 20 years and have a fleet of over 100 vehicles. Our vehicles are well maintained and serviced regularly to ensure the safety and comfort of our customers. We offer a wide range of vehicles to suit every need and budget, from economy to luxury cars, SUVs, vans, and buses. Our team of experienced and professional drivers are dedicated to providing the best service to our customers. We also offer 24/7 customer support and online booking facilities for your convenience.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default History;