import { createTheme } from '@mui/material/styles';

const theme = createTheme({});

export const defaultTheme = createTheme(theme, {
  mode: 'dark',
  palette: {
    background: {
      // default: '#EFF2F7',
      // default: '#020204',
      default: '#090d11',
    },
    primary: {
      main: '#121214',
    },
    secondary: {
      main: '#4BD6D0',
    },
    text: {
      primary: '#ffffff',
    },
  },
  mixins: {
    toolbar: {
      height: '60px',
    },
  },
});

export default defaultTheme;
