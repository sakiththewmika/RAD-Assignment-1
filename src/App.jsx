import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Vehicles from './pages/Vehicles';
import History from './pages/History';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';
import './index.css';
import { Box} from '@mui/material';

const App = () => {
  return (
    <ThemeProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="services" element={<Service />} />
            <Route path="vehicles" element={<Vehicles />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;



