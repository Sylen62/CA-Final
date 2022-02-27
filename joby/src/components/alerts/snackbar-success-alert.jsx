import React from 'react';
import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';

const StyledAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px groove ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  '& .MuiAlert-icon': {
    color: theme.palette.secondary.main,
  },
}));

const SnackbarSuccessAlert = ({ message }) => (
  <StyledAlert severity="success">
    {message}
  </StyledAlert>
);

export default SnackbarSuccessAlert;
