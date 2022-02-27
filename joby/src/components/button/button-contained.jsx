import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  border: 'none',
  fontWeight: '600',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    border: 'none',
  },
  '&.Mui-disabled': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderRadius: '4px',
  },
}));

const ButtonContained = ({
  onClick, btnText, loading, ...otherProps
}) => (
  <StyledButton
    onClick={onClick}
    variant="contained"
    size="medium"
    disabled={loading}
    {...otherProps}
  >
    { loading
      ? <CircularProgress size="25px" sx={(theme) => ({ color: theme.palette.common.black })} />
      : btnText}
  </StyledButton>
);

export default ButtonContained;
