import React, { useState } from 'react';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useTheme } from '@emotion/react';
import FormTextField from '../text-field/form-text-field';

const JobOfferDatepicker = ({
  name, label, inputProps, ...restProps
}) => {
  const [value, setValue] = useState(null);
  const theme = useTheme();
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        name={name}
        label={label}
        value={value}
        mask="____-__-__"
        inputFormat="YYYY-MM-DD"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <FormTextField
            name={name}
            fullWidth
            {...params}
            {...inputProps}
          />
        )}
        InputAdornmentProps={{
          sx: {
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            '& .MuiButtonBase-root': {
              color: theme.palette.secondary.main,
            },
            '& .MuiIconButton-edgeEnd': {
              color: theme.palette.secondary.main,
            },
            '& .MuiIconButton-edgeStart': {
              color: theme.palette.secondary.main,
            },
            '& .Mui-selected': {
              backgroundColor: `${theme.palette.secondary.main} !important`,
            },
            '& .Mui-selected:focus': {
              backgroundColor: `${theme.palette.secondary.main} !important`,
            },
            '& .MuiPickersDay-root': {
              backgroundColor: 'black',
              color: 'white',
              boxShadow: `0px 0px 0px 1px ${theme.palette.secondary.main}`,
              margin: '3px',
            },
            '& .MuiTypography-root': {
              color: 'white',
            },
          },
        }}
        {...restProps}
      />
    </LocalizationProvider>
  );
};

export default JobOfferDatepicker;
