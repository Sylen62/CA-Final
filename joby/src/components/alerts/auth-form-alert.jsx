import React from 'react';
import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';

const StyledAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px groove ${theme.palette.warning.main}`,
  color: theme.palette.warning.main,
  '& .MuiAlert-icon': {
    color: theme.palette.warning.main,
  },
}));

const AuthFormAlert = ({ error, ...restProps }) => (
  <StyledAlert severity="error" {...restProps}>
    {error}
  </StyledAlert>
);

export default AuthFormAlert;
