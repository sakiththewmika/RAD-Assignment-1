import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';


const Vehicles = () => {
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
            <Grid item md={12} mb={4}>
                <Typography variant="h3">Vehicles</Typography>
            </Grid>
            <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={3}>
                    <Img src="/Mercedes-S-Class.jpg" alt="car1" maxWidth={'200px'} />
                    <Typography variant="h6" align='center'>Luxury Cars</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Img src="/landcruiser_300.jpg" alt='car2' maxWidth={'200px'} />
                    <Typography variant="h6" align='center'>SUV Vehicles</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Img src="/toyota-alphard.jpg" alt='car2' maxWidth={'200px'} />
                    <Typography variant="h6" align='center'>Buses & Vans</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Img src="/austin-sheerline-royal-limousine.jpg" alt='car2' maxWidth={'200px'} />
                    <Typography variant="h6" align='center'>Classic & Vintage</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Vehicles;