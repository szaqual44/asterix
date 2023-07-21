import { createTheme } from '@mui/material/styles';

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
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});
