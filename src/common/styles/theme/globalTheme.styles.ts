import {createTheme} from '@mui/material/styles';
import {Colors} from '../variables.styles';


export const globalTheme = createTheme({
    typography: {
        fontFamily: [`Bahnschrift`, 'sans-serif'].join(','),
        h1: {
            fontSize: 60,
            color: Colors.headerText,


            '&::before': {
                content: '" "',
                border: `3px solid ${Colors.primary}`,
                marginRight:'2rem',


            },
        },
        h2: {
            fontSize: 100,
            color: Colors.headerText,
        },
        h3: {
            fontSize: 25,
            lineHeight: '200%',

        },
        h4: {
            fontSize: 20,
            lineHeight: '150%',
            color: Colors.white,
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '0.2rem',

        },
        h5: {
            fontSize: 20,
            lineHeight: '200%',
            letterSpacing: '0.5rem',
        },
        h6: {
            fontSize: 20,
        },
    },
    components: {
        MuiCssBaseline: {
            // styleOverrides: `
            //   @font-face {
            //     font-family: '${fontName}';
            //     font-weight: 400;
            //     src: local('${fontName}'), local('${fontName}-Regular'), url(${MyFonts}) format('ttf');
            //     unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            //   }
            // `,
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
