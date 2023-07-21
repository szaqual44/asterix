import {createTheme} from '@mui/material/styles';

export const globalTheme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        h2: {
            fontFamily: ['Rubik', 'sans-serif'].join(','),
            fontSize: 20,
        },
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                root: {
                    // fontSize: 55,
                    // color: 'red'
                }
            }
        },
    },
});
