import React from 'react';
import { Container, Typography } from '@mui/material';

const ErrorPage = () => (
  <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '7vh' }}>
    <Typography textAlign="center">Error - page not found</Typography>
  </Container>
);

export default ErrorPage;
