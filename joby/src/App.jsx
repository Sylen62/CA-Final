import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import store from './store';
import PageRouter from './routing/page-router';

import { defaultTheme } from './styles/theme';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <PageRouter />
      </CssBaseline>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
