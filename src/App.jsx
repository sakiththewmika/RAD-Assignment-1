import React from 'react'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import { ThemeProvider } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;


