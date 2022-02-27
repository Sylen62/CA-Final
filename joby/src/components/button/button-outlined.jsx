import React from 'react';
import { Button, CircularProgress } from '@mui/material';
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
  '&.Mui-disabled': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    borderRadius: '4px',
  },
}));

const ButtonOutlined = ({
  onClick, btnText, btnReturn, loading, ...otherProps
}) => (
  <StyledButton
    onClick={onClick}
    variant="outlined"
    size="medium"
    disabled={loading}
    startIcon={btnReturn && <ArrowBackIosIcon />}
    {...otherProps}
  >
    { loading
      ? <CircularProgress size="25px" sx={(theme) => ({ color: theme.palette.secondary.main })} />
      : btnText}
  </StyledButton>
);

export default ButtonOutlined;
