import React from 'react';
import {
  FormControl, InputLabel, OutlinedInput, Select,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// Mui-focused
const StyledSelect = styled(Select)(({ theme }) => ({
  '&.MuiOutlinedInput-root': {
    // border: `2px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,

  },
  '&.MuiOutlinedInput-root .Mui-focused': {
    // border: `2px solid ${theme.palette.common.white}`,
    // border: 'none',
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  '&.MuiOutlinedInput-root .MuiInputLabel-root': {
    color: theme.palette.common.white,
  },
  '&.MuiOutlinedInput-root .MuiInputLabel-root .Mui-focused': {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,

  },
  '& .MuiSelect-outlined': {
    // color: 'red',

  },
  // border: `1px solid ${theme.palette.secondary.main}`,
  // color: theme.palette.common.white,
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  // border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.common.white,
  '&.Mui-focused': {
    color: theme.palette.common.white,
  },
}));

const FormSelect = ({
  children, name, value, handleChange, ...restProps
}) => (
  <FormControl fullWidth>
    <StyledInputLabel id="demo-simple-select-label">Salary type</StyledInputLabel>
    <StyledSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name={name}
      value={value}
      label="Salary type"
      onChange={handleChange}
      // variant="outlined"
      input={<OutlinedInput label="Salary type" />}
      size="medium"
      inputProps={{
        MenuProps: {
          sx: (theme) => ({
            '& .MuiList-root': {
              backgroundColor: theme.palette.primary.main,
              border: `1px solid ${theme.palette.secondary.main}`,
            },
            '& .MuiList-root .MuiMenuItem-root.Mui-selected': {
              color: theme.palette.secondary.main,
            },
            '& .MuiList-root .MuiMenuItem-root:hover': {
              color: theme.palette.secondary.main,
            },
          }),
        },
      }}
      {...restProps}
    >
      {children}
    </StyledSelect>
  </FormControl>
);

export default FormSelect;
