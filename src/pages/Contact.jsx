import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

const Img = styled('img')({
  width: '100%', // Adjusted for responsiveness
  height: 'auto',
  objectFit: 'fill',
  itemAlign: 'right',
  justifyContent: 'center',
  margin: 'auto'
});

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  useEffect(() => {
    const formData = { name, email, message };
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }, [name, email, message]);

  const validateField = (name, value) => {
    try {
      yup.reach(schema, name).validateSync(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const handleChange = (field, value) => {
    switch (field) {
      case 'name':
        setName(value);
        validateField(field, value);
        break;
      case 'email':
        setEmail(value);
        validateField(field, value);
        break;
      case 'message':
        setMessage(value);
        validateField(field, value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    schema.validate(formData, { abortEarly: false })
      .then(() => {
        console.log(formData);
        setSubmissionMessage('Your message has been sent successfully!');
        setErrors({});
      })
      .catch((validationErrors) => {
        const formattedErrors = {};
        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
        });
        setErrors(formattedErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={message}
          onChange={(e) => handleChange('message', e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">Send</Button>
      {submissionMessage && <Typography variant="body1" color="success.main" mt={4}>{submissionMessage}</Typography>}
    </form>
  );
};

const Contact = () => {
  return (
    <Container maxWidth={'false'} sx={{ maxWidth: 1280 }} >
      <Section id="contact">
        <Typography variant="h2" gutterBottom>Contact Us</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box mr={4}>
              <Typography mb={4} variant="h6" gutterBottom>If you have any questions or inquiries, please feel free to reach out to us</Typography>
              <ContactForm />
              <Box mt={4} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant="h4" mb={2}>Contact Information</Typography>
                <Typography variant="h6" m={1}>Address: 123 Main Street, Negombo</Typography>
                <Typography variant="h6" m={1}>Phone: +94 76 483 4398</Typography>
                <Typography variant="h6" m={1}>Email: info@emeraldrentals.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} display={'flex'}>
            <Img src="contact.png" alt="contactimg" sx={{maxWidth : {xs : '300px', sm : '400px', md : '450px'}}} />
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Contact;
