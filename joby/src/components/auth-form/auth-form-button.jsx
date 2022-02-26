import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  border: 'none',
  fontWeight: '600',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    border: 'none',
    textDecoration: 'none',
  },
  '&.Mui-disabled': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.common.white,
    borderRadius: '4px',
  },
}));

const FormButton = ({ children, disabled, ...restProps }) => (
  <StyledButton
    type="submit"
    fullWidth
    variant="outlined"
    sx={{ height: 56, mb: 1 }}
    disabled={disabled}
    {...restProps}
  >
    {disabled ? 'Fill in required fields' : children}
  </StyledButton>
);

export default FormButton;
