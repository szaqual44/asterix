import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { globalTheme } from './common/styles/theme/globalTheme.styles';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <App />

      <div></div>
    </ThemeProvider>
  </React.StrictMode>,
);
