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
            fontSize: 40,
            fontWeight:'bold'
        },
        h3: {
            fontFamily: ['Rubik', 'sans-serif'].join(','),
            fontSize: 30,
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
