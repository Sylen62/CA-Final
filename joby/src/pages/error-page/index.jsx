import React from 'react';
import { Typography } from '@mui/material';
import MainContentContainer from '../../components/container/main-content-container';

const ErrorPage = () => (
  <MainContentContainer maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '7vh' }}>
    <Typography textAlign="center">Error - page not found</Typography>
  </MainContentContainer>
);

export default ErrorPage;
