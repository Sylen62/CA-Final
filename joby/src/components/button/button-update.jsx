import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  border: 'none',
  fontWeight: '600',
  marginTop: '10px',
  // maxWidth: '400px',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    border: 'none',
    textDecoration: 'none',
  },
  '&.Mui-disabled': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderRadius: '4px',
  },
}));

const ButtonUpdate = ({ btnText, loading, ...restProps }) => (
  <StyledButton size="large" fullWidth disabled={loading} {...restProps}>
    { loading
      ? <CircularProgress size="26px" sx={(theme) => ({ color: theme.palette.common.black })} />
      : btnText}
  </StyledButton>
);

export default ButtonUpdate;
