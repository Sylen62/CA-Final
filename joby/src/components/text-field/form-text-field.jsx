import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.common.white,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.secondary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.common.white,
  },
  '& input': {
    color: theme.palette.common.white,
  },
  '& input.Mui-disabled': {
    color: theme.palette.common.white,
  },
  '& .Mui-disabled': {
    color: theme.palette.common.white,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
  },
  // '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline .Mui-Error': {
  //   borderColor: 'orange',
  //   // borderColor: theme.palette.common.white,
  //   // Kazkodel isvis nerodo tada
  // },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: `2px solid ${theme.palette.common.white}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.main} inset`,
    WebkitTextFillColor: theme.palette.common.white,
  },
}));

const FormTextField = ({ ...restProps }) => (
  <StyledTextField variant="outlined" {...restProps} />
);

export default FormTextField;

/* Fix black (change to white) color of some fields while disabled */
