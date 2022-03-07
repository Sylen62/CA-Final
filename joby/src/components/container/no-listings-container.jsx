import React from 'react';
import { Box, Typography } from '@mui/material';
import SecondaryContentContainer from './secondary-content-container';

const NoListingsContainer = ({ children, sx }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
    <SecondaryContentContainer maxWidth="md">
      <Typography component="h3" variant="h4" textAlign="center">
        {children}
      </Typography>
    </SecondaryContentContainer>
  </Box>
);

export default NoListingsContainer;
