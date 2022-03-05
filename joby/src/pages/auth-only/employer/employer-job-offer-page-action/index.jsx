/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import MainContentContainer from '../../../../components/container/main-content-container';
import ButtonOutlined from '../../../../components/button/button-outlined';
import SecondaryContentContainer from '../../../../components/container/secondary-content-container';
import EmployerJobOfferActionForm from './employer-job-offer-action-form';
import JobOfferService from '../../../../services/job-offer-service';

const EmployerJobOfferAction = () => {
  const [loading, setLoading] = useState(true);
  const [jobOffer, setJobOffer] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [pageAction] = useState(params.action);

  useEffect(() => {
    if (pageAction === 'edit') {
      setLoading(true);
      (async () => {
        const { offer } = await JobOfferService.getJobOfferById(params.id);
        setJobOffer(offer);
        setLoading(false);
      })();
    } else setLoading(false);
  }, []);

  return (
    <MainContentContainer maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '3vh' }}>
      <Typography textAlign="center" id="modal-modal-title" variant="h5" component="h2">
        {pageAction[0].toUpperCase()}
        {pageAction.substring(1)}
        {' '}
        Offer
      </Typography>
      <SecondaryContentContainer sx={{ mt: 2 }}>
        { !loading ? <EmployerJobOfferActionForm pageAction={pageAction} jobOffer={jobOffer} /> : null}
      </SecondaryContentContainer>
      <Box sx={{
        display: 'flex', justifyContent: 'flex-start', gap: '1rem', mt: '1rem',
      }}
      >
        <ButtonOutlined onClick={() => navigate(-1)} btnText="Return" btnReturn />
      </Box>
    </MainContentContainer>
  );
};
export default EmployerJobOfferAction;
