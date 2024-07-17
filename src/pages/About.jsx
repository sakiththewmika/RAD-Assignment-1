import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link, Outlet } from 'react-router-dom';

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(12, 0, 8, 0),
}));

const Img = styled('img')({
    width: '100%', // Adjusted for responsiveness
    height: 'auto',
    objectFit: 'fill',
    itemAlign: 'right',
    justifyContent: 'center',
    margin: 'auto'
});

const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
        textDecoration: 'none',
    },
}));

const NavBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    margin: theme.spacing(1),
    '&:hover': {
        boxShadow: theme.shadows[4],
    },
}));

const About = () => {

    return (
        <Container maxWidth={false} sx={{ maxWidth: 1280 }}>
            <Section id="about">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom>About Us</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" paragraph>
                            Emerald Rentals is a top car rental service in Sri Lanka, known for excellence and customer satisfaction. With over 20 years of experience, we offer reliable and affordable transportation solutions, including a diverse fleet of economy cars, luxury vehicles, SUVs, vans, and buses. Our vehicles are well-maintained for safety and comfort, and our professional drivers deliver exceptional service. We provide 24/7 customer support and convenient online booking for both short-term rentals and long-term leases. Emerald Rentals ensures a smooth and enjoyable journey for every customer.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display={'flex'}>
                        <Img src="/about.png" alt="aboutimg" sx={{ maxWidth: { xs: '400px', sm: '420px', md: '400px' } }} />
                    </Grid>
                </Grid>
                <Grid container mt={2} spacing={[1, 1, 4, 6]} justifyContent="center">
                    <Grid item xs={10} sm={8} md={4}>
                        <NavLink to="history">
                            <NavBox>
                                <Typography variant="h4">Our History</Typography>
                            </NavBox>
                        </NavLink>
                    </Grid>
                    <Grid item xs={10} sm={8} md={4}>
                        <NavLink to="services">
                            <NavBox>
                                <Typography variant="h4">Our Services</Typography>
                            </NavBox>
                        </NavLink>
                    </Grid>
                    <Grid item xs={10} sm={8} md={4}>
                        <NavLink to="vehicles">
                            <NavBox>
                                <Typography variant="h4">Our Vehicles</Typography>
                            </NavBox>
                        </NavLink>
                    </Grid>
                </Grid>
                <Box mt={6}>
                    <Outlet />
                </Box>
            </Section>
        </Container>
    );
};

export default About;
