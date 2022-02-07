import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.common.white}`,
  fontWeight: '600',
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const ButtonOutlined = ({
  onClick, btnText, btnReturn, ...otherProps
}) => (
  <StyledButton
    onClick={onClick}
    variant="outlined"
    size="medium"
    startIcon={btnReturn && <ArrowBackIosIcon />}
    {...otherProps}
  >
    {btnText}
  </StyledButton>
);

export default ButtonOutlined;
