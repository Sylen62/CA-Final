import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import MainContentContainer from '../../../components/container/main-content-container';
import ButtonContained from '../../../components/button/button-contained';
import JobOfferTable from '../../../components/table/job-offer-table';
import InfoSnackbar from '../../../components/snackbar';

const EmloyerJobOfferPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [infoSnackbar, setInfoSnackbar] = useState({ open: false, success: false, message: '' });

  const handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setInfoSnackbar({ open: false });
  };

  useEffect(() => {
    if (location.state) {
      setInfoSnackbar({
        open: location.state.open,
        success: location.state.success,
        message: location.state.message,
      });
      navigate('', { state: null });
    }
  }, []);

  return (
    <MainContentContainer>
      <InfoSnackbar {...infoSnackbar} handleSnackbarClose={handleSnackbarClose} />
      <Typography component="h2" variant="h4" textAlign="center">Job Offers</Typography>
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '1rem' }}>
          <ButtonContained onClick={() => navigate('/employer/job-offers/create')} btnText="Create new offer" size="small" />
        </Box>
        <JobOfferTable />
      </>
    </MainContentContainer>
  );
};

export default EmloyerJobOfferPage;
