import React, { createContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

// Define light theme with custom AppBar colors
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0088ffd1', // Custom primary color
    },
    secondary: {
      main: '#005b9f', // Custom secondary color
    },
    background: {
      default: '#ffffff', // Default background color
      paper: '#f0f2f5', // Paper background color
    },
    text: {
      primary: '#000000', // Text color
      secondary: '#5f6368', // Secondary text color
    },
    appBar: {
      main: '#02091d', // Custom AppBar color
      contrastText: '#ffffff', // Text color for AppBar
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#0088ffd1', // Custom button color
          color: '#ffffff', // Text color for button
          '&:hover': {
            backgroundColor: '#005b9f', // Custom hover color
          },
        },
      },
    },
  }
  // Add more theme options if needed
});

// Define dark theme with custom AppBar colors
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0088ffd1', // Custom primary color
    },
    secondary: {
      main: '#005b9f', // Custom secondary color
    },
    background: {
      default: '#070F2B', // Default background color
      paper: '#02091d', // Custom paper color
    },
    text: {
      primary: '#ececec', // Text color
      secondary: '#8f9bb3', // Secondary text color
    },
    appBar: {
      main: '#02091d', // Custom AppBar color
      contrastText: '#ffffff', // Text color for AppBar
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#0088ffd1', // Custom button color
          color: '#ffffff', // Text color for button
          '&:hover': {
            backgroundColor: '#005b9f', // Custom hover color
          },
        },
      },
    },
  }
  // Add more theme options if needed
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
