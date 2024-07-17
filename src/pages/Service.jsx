import React from 'react';
import { Box, Container, Typography, Grid, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';

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
            <Grid container rowSpacing={4} spacing={4}>
                <Grid item md={12}>
                    <Typography variant="h3">Services</Typography>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'}>
                    <Img src="/about2.png" alt="aboutimg" sx={{ maxWidth: { xs: '400px', sm: '420px', md: '500px' } }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1">We offer a wide range of Sri Lanka car hire facilities ranging from economy to luxury. The fleet consists of cars, sports utility, and 4WD vehicles, vans and buses. There is also a range of classic and vintage cars available for weddings, television, cinema, commercials and other special occasions.</Typography>
                    <Box mt={2} sx={{ ml: { xs: 2, sm: 8, md: 8 } }} >
                        <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                            <li>24/7 Customer Support</li>
                            <li>Online Booking</li>
                            <li>GPS Navigation</li>
                            <li>Comprehensive Insurance</li>
                            <li>Airport Pickup and Drop</li>
                            <li>Chauffeur Driven Vehicles</li>
                            <li>Self Drive Vehicles</li>
                            <li>Wedding Cars</li>
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Services;