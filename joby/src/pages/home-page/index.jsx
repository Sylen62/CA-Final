import React, { useState } from 'react';
import { Container } from '@mui/material';
import HomePageHero from './home-page-hero';
import HomePageLatestJobs from './home-page-latest-jobs';
import HomePageLatestCandidates from './home-page-latest-candidates';
import InfoSnackbar from '../../components/snackbar';

const HomePage = () => {
  const [infoSnackbar, setInfoSnackbar] = useState({ open: false, success: false, message: '' });

  const handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setInfoSnackbar({ open: false });
  };
  return (
    <>
      <InfoSnackbar {...infoSnackbar} handleSnackbarClose={handleSnackbarClose} />
      <HomePageHero />
      <Container maxWidth="xl">
        <HomePageLatestJobs setInfoSnackbar={setInfoSnackbar} />
        <HomePageLatestCandidates setInfoSnackbar={setInfoSnackbar} />
      </Container>
    </>
  );
};

export default HomePage;
