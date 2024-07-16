import React, { useState } from 'react';
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
  const [submissionMessage, setSubmissionMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

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

