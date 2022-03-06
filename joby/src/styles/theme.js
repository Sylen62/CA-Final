import { createTheme } from '@mui/material/styles';

const theme = createTheme({});

export const defaultTheme = createTheme(theme, {
  mode: 'dark',
  palette: {
    background: {
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
    footer: {
      height: '60px',
    },
    content: {
      minContentHeight: 'calc(100vh - 124px)',
    },
  },
  overrides: {
    MUIRichTextEditor: {
      root: {
        backgroundColor: '#121214',
        color: 'white',
        border: '1px solid #4BD6D0',
        borderRadius: '10px',
        '& .MuiButtonBase-root': {
          color: 'white',
        },
      },
      editor: {
        padding: '1rem',
        minHeight: '300px',
      },
      editorContainer: {
        minHeight: '300px',
      },
      toolbar: {
        borderBottom: '1px solid #4BD6D0',
      },
    },
  },
});

export default defaultTheme;
