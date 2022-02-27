import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

const SnackbarSuccessAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px groove ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  '& .MuiAlert-icon': {
    color: theme.palette.secondary.main,
  },
}));

const SnackbarErrorAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px groove ${theme.palette.error.main}`,
  color: theme.palette.error.main,
  '& .MuiAlert-icon': {
    color: theme.palette.error.main,
  },
}));

const InfoSnackbar = ({
  open, success, message, handleSnackbarClose,
}) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleSnackbarClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  >
    { success ? (
      <SnackbarSuccessAlert onClose={handleSnackbarClose}>{message}</SnackbarSuccessAlert>
    ) : (
      <SnackbarErrorAlert onClose={handleSnackbarClose}>{message}</SnackbarErrorAlert>
    )}
  </Snackbar>
);

export default InfoSnackbar;
