import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  '& label.Mui-focused': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  '& input': {
    // color: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    // borderColor: theme.palette.secondary.main,
    borderColor: theme.palette.common.white,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline .Mui-Error': {
    // borderColor: 'orange',
    borderColor: theme.palette.common.white,
    // Kazkodel isvis nerodo tada
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    // border: `2px solid ${theme.palette.secondary.main}`,
    border: `2px solid ${theme.palette.common.white}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    // borderColor: theme.palette.secondary.main,
    borderColor: theme.palette.common.white,
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.main} inset`,
    // WebkitTextFillColor: theme.palette.secondary.main,
    WebkitTextFillColor: theme.palette.common.white,
  },
}));

const MainTextField = (props) => (
  <StyledTextField {...props} />
);

export default MainTextField;
