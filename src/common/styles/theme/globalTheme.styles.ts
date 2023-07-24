import {createTheme} from '@mui/material/styles';
import {Colors} from "../variables.styles";

export const globalTheme = createTheme({
    typography: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        h1: {
            fontSize: 100,
            color: Colors.headerText,
            // "&:hover":{
            //     color:'red'
            // }
        },
        h2: {
            fontFamily: ['Rubik', 'sans-serif'].join(','),
            fontSize: 20,
        },
        p :{
            fontSize: 20,
            color: Colors.headerText,
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
