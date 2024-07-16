import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const MainPage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to UniQuest!');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  useEffect(() => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    setWelcomeMessage(`Good ${greeting}!`);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    setSubmissionMessage('Your message has been sent successfully!');
  };

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
            <Img src="/background.png" alt="mainimg" sx={{maxWidth : {xs : '400px', sm : '500px', md : '600px'}}} />
          </Grid>
        </Grid>
      </Section>

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


      <Section id="contact">
        <Typography variant="h2" gutterBottom>Contact Us</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box mr={4}>
              <Typography mb={4} variant="h6" gutterBottom>If you have any questions or inquiries, please feel free to reach out to us</Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={2}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    {...register('message')}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                </Box>
                <Button type="submit" variant="contained" color="primary">Send</Button>
              </form>
              {submissionMessage && <Typography variant="body1" color="success.main">{submissionMessage}</Typography>}
              <Box mt={4}>
                <Typography variant="h4" mb={2}>Contact Information</Typography>
                <Typography variant="h6" m={1}>Address: 123 Main Street, Negombo</Typography>
                <Typography variant="h6" m={1}>Phone: +94 76 483 4398</Typography>
                <Typography variant="h6" m={1}>Email: info@emeraldrentals.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} display={'flex'}>
            <Img src="/contact.png" alt="contactimg" sx={{maxWidth : {xs : '300px', sm : '400px', md : '450px'}}} />
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default MainPage;

