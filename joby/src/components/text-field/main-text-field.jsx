import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.common.white,
  },
  '& label.Mui-focused': {
    color: theme.palette.common.white,
  },
  '& input': {
    color: theme.palette.common.white,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.common.white,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline .Mui-Error': {
    borderColor: theme.palette.common.white,
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: `2px solid ${theme.palette.common.white}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.common.white,
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.main} inset`,
    WebkitTextFillColor: theme.palette.common.white,
  },
}));

const MainTextField = (props) => (
  <StyledTextField {...props} />
);

export default MainTextField;
