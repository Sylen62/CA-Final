import React from 'react';
import { Box } from '@mui/material';

const UserProfileForm = ({ children, onSubmit }) => (
  <Box component="form" onSubmit={onSubmit} sx={{ width: '100%' }}>
    {children}
  </Box>
);

export default UserProfileForm;
