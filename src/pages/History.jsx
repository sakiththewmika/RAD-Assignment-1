import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const History = () => {

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
                    <Grid item xs={12} md={6} display={'flex'}>
                        <Img src="/about1.png" alt="aboutimg" sx={{ maxWidth: { xs: '400px', sm: '450px', md: '500px' } }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">History</Typography>
                        <Typography variant="body1">Emerald Rentals is a leading car rental company in Sri Lanka. We have been in the business for over 20 years and have a fleet of over 100 vehicles. Our vehicles are well maintained and serviced regularly to ensure the safety and comfort of our customers. We offer a wide range of vehicles to suit every need and budget, from economy to luxury cars, SUVs, vans, and buses. Our team of experienced and professional drivers are dedicated to providing the best service to our customers. We also offer 24/7 customer support and online booking facilities for your convenience.</Typography>
                    </Grid>
                </Grid>
            </section>
        </Container>
    );
};

export default History;