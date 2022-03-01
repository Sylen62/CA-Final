import React from 'react';
import { Box } from '@mui/material';

const UserProfileForm = ({ children, onSubmit, ...restProps }) => (
  <Box component="form" onSubmit={onSubmit} sx={{ width: '100%' }} {...restProps}>
    {children}
  </Box>
);

export default UserProfileForm;
