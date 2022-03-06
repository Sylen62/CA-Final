import React from 'react';
import FormTextField from '../text-field/form-text-field';

const selectProps = {
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
};

const FormSelect = ({ children, ...restProps }) => (
  <FormTextField
    select
    variant="outlined"
    SelectProps={selectProps}
    fullWidth
    {...restProps}
  >
    {children}
  </FormTextField>
);

export default FormSelect;
