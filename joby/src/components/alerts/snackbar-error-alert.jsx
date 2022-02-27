import React from 'react';
import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';

const StyledAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px groove red ${theme.palette.error.main}`,
  color: theme.palette.error.main,
  '& .MuiAlert-icon': {
    color: theme.palette.error.main,
  },
}));

const SnackbarErrorAlert = ({ message, ...restProps }) => (
  <StyledAlert severity="error" {...restProps}>
    {message}
  </StyledAlert>
);

export default SnackbarErrorAlert;
