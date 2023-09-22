import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#D434FE', // Your primary color
    },
    secondary: {
      main: '#ff5722', // Your secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Your preferred font family
    fontSize: 16,
  },
  spacing: 8, // Adjust spacing as needed
});

export default theme;
