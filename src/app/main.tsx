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
      primary: '#FFD700',
      secondary: '#fff8e1',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/MangaMania-2.0-Frontend/'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
