import React from 'react';
import { Box, Typography } from '@mui/material';
import SecondaryContentContainer from './secondary-content-container';

const NoListingsContainer = ({ children }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <SecondaryContentContainer maxWidth="md">
      <Typography component="h3" variant="h4" textAlign="center">
        {children}
      </Typography>
    </SecondaryContentContainer>
  </Box>
);

export default NoListingsContainer;
