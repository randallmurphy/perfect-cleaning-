import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0077cc',
    },
    secondary: {
      main: '#ff6600',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
