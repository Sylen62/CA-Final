import React from 'react';
import { Button } from '@mui/material';
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
}));

const ButtonContained = ({ onClick, btnText, ...otherProps }) => (
  <StyledButton
    onClick={onClick}
    variant="contained"
    size="medium"
    {...otherProps}
  >
    {btnText}
  </StyledButton>
);

export default ButtonContained;
