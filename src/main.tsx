import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {globalTheme} from './common/styles/theme/globalTheme.styles';
import {ThemeProvider} from '@mui/material/styles';
import {GlobalStyles} from "./common/styles/global.styles";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles/>
        <ThemeProvider theme={globalTheme}>
            <App/>

        </ThemeProvider>
    </React.StrictMode>,
);
