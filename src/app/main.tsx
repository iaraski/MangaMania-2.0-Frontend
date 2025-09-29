import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // золотой
    },
    background: {
      default: '#18120f', // очень тёмный фон
      paper: '#221a13',
    },
    text: {
      primary: '#FFD700', // заголовки
      secondary: '#fff8e1', // основной текст
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      color: '#FFD700',
      textShadow: '0 0 5px rgba(255, 215, 0, 0.5)',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#FFD700',
      textShadow: '0 0 4px rgba(255, 215, 0, 0.4)',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: '1.2rem',
      color: '#FFD700',
    },
    body1: {
      fontSize: '1rem',
      color: '#fff8e1',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.9rem',
      color: '#e0d8c0',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '0.95rem',
      fontWeight: 500,
      color: '#FFFAAA',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      color: '#FFD700',
      '&:hover': {
        color: '#FFE066',
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
