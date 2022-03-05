import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainContentContainer from '../../../components/container/main-content-container';
import ButtonContained from '../../../components/button/button-contained';
import JobOfferTable from '../../../components/table/job-offer-table';

const EmloyerJobOfferPage = () => {
  const navigate = useNavigate();

  return (
    <MainContentContainer>
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
