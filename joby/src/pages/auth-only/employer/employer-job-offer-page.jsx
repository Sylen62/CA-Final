import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MainContentContainer from '../../../components/container/main-content-container';
import SecondaryContentContainer from '../../../components/container/secondary-content-container';
import ButtonContained from '../../../components/button/button-contained';
import JobOfferTable from '../../../components/table/job-offer-table';
import JobOfferModal from '../../../components/modal/job-offer-modal';

const EmloyerJobOfferPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = (openModal) => setOpen(openModal);

  return (
    <MainContentContainer>
      <Typography component="h2" variant="h4" textAlign="center">Job Offers</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonContained onClick={() => handleOpenModal(true)} btnText="Create new offer" size="small" />
      </Box>
      <SecondaryContentContainer>
        <JobOfferTable />
      </SecondaryContentContainer>
      <JobOfferModal open={open} handleOpenModal={handleOpenModal} />
    </MainContentContainer>
  );
};

export default EmloyerJobOfferPage;
