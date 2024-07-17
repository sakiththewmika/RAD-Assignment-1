import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link, Outlet } from 'react-router-dom';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0, 8, 0),
}));

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const NavBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  margin: theme.spacing(1),
  flexGrow: 1,
}));

const About = () => {
  const Img = styled('img')({
    width: '100%', // Adjusted for responsiveness
    height: 'auto',
    objectFit: 'fill',
    alignSelf: 'center',
    justifySelf: 'center',
    margin: 'auto',
  });

  return (
    <Container maxWidth={false} sx={{ maxWidth: 1280 }}>
      <Section id="about">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>About Us</Typography>
            <Typography variant="body1" paragraph>
              Emerald Rentals is a premier car rental service in Sri Lanka, known for its commitment to excellence and customer satisfaction. With over two decades of experience in the industry, we have built a reputation for providing reliable and affordable transportation solutions. Our diverse fleet includes everything from economy cars to luxury vehicles, SUVs, vans, and buses, ensuring that we can meet the needs of every customer, whether they are traveling for business, leisure, or special occasions. At Emerald Rentals, safety and comfort are our top priorities, which is why all our vehicles are meticulously maintained and serviced regularly. Our team of professional drivers is dedicated to delivering exceptional service, and our 24/7 customer support ensures that assistance is always just a phone call away. Additionally, we offer convenient online booking facilities, making it easy for customers to reserve their preferred vehicle at any time. Whether you're looking for a short-term rental or a long-term lease, Emerald Rentals is here to make your journey smooth and enjoyable.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <NavLink to="vehicles">
              <NavBox>
                <Typography variant="h4">Our Vehicles</Typography>
              </NavBox>
            </NavLink>
          </Grid>
          <Grid item xs={12} md={4}>
            <NavLink to="services">
              <NavBox>
                <Typography variant="h4">Our Services</Typography>
              </NavBox>
            </NavLink>
          </Grid>
          <Grid item xs={12} md={4}>
            <NavLink to="history">
              <NavBox>
                <Typography variant="h4">Our History</Typography>
              </NavBox>
            </NavLink>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Outlet />
        </Box>
      </Section>
    </Container>
  );
};

export default About;
