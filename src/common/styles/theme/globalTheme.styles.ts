import { createTheme } from '@mui/material/styles';
import { Colors } from '../variables.styles';

import MyFonts from '/fonts/Borel-Regular.ttf';
const fontName = 'Borel'


export const globalTheme = createTheme({
  typography: {
    fontFamily: [`${fontName}`, 'sans-serif'].join(','),
    h1: {
      fontSize: 100,
      color: Colors.headerText,
      marginBottom:'10rem',
    },
    h2: {
      fontSize: 40,
      fontWeight: 'bold',

    },
    h3: {
      fontSize: 30,
      fontWeight: 'bold',
      lineHeight: '200%',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: '${fontName}';
          font-weight: 400;
          src: local('${fontName}'), local('${fontName}-Regular'), url(${MyFonts}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },

    MuiButton: {
      styleOverrides: {
        root: {
          // fontSize: 55,
          // color: 'red'
        },
      },
    },
  },
});
