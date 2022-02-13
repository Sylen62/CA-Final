import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  // backgroundColor: theme.palette.common.white,
  border: 'none',
  fontWeight: '600',
  marginTop: '10px',
  maxWidth: '400px',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    // backgroundColor: theme.palette.common.white,
    border: 'none',
    // '-webkit-text-decoration': 'none',
    textDecoration: 'none',
  },
  '&.Mui-disabled': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    // borderColor: theme.palette.secondary.main,
    borderColor: theme.palette.common.white,
    borderRadius: '4px',
  },
}));

const ButtonUpdate = ({ btnText, ...restProps }) => (
  <StyledButton {...restProps}>
    {btnText}
  </StyledButton>
);

export default ButtonUpdate;
