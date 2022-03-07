import React, { useEffect, useRef, useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {
  Container, Box, Grid, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image } from 'mui-image';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonContained from '../../components/button/button-contained';
import ButtonOutlined from '../../components/button/button-outlined';
import SendCvModal from '../../components/modal/send-cv-modal';
import ListingsService from '../../services/listings-service';

const CompanyInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '227px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '227px',
  },
  [theme.breakpoints.up('md')]: {
    height: '227px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    height: '250px',
  },
}));

const StyledContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    marginLeft: '1rem',
    marginTop: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '1rem',
  },
}));

const JobInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AditionalInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '200px',
}));

const JobPageJob = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const jobOfferRef = useRef('');
  const employerDescriptionRef = useRef('');
  const [jobOffer, setJobOffer] = useState();
  const [loading, setLoading] = useState(true);
  const { jobId } = useParams();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { offer } = await ListingsService.getJobOfferById(jobId);
      setJobOffer(offer);
      setLoading(false);
      jobOfferRef.current.innerHTML = offer.description
        && offer.description.length > 9
        ? JSON.parse(offer.description) : 'No description';
      employerDescriptionRef.current.innerHTML = offer.user.fullDescription
        && offer.user.fullDescription.length > 9
        ? JSON.parse(offer.user.fullDescription) : 'No description';
    })();
  }, []);

  const handleReturn = () => navigate(-1);

  const handleOpenModal = (openModal) => setOpen(openModal);

  return (
    <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '3vh' }}>
      { !loading
        ? (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography component="h4" variant="h4" textAlign="center" sx={{ mb: '1rem' }}>Employer</Typography>
              <CompanyInfoContainer>
                <Grid container sx={{ width: '100%', height: '100%' }}>
                  <Grid item xs={12} md={4} sx={{ width: '100%', maxHeight: { xs: '10%', sm: '30%', lg: '100%' } }}>
                    <StyledImageBox>
                      <Image
                        src={jobOffer.user.image ?? ''}
                        duration={500}
                        height="100%"
                        width="100%"
                        sx={{
                          borderRadius: '10px',
                          objectPosition: 'center',
                        }}
                      />
                    </StyledImageBox>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <StyledContentContainer>
                      <Typography component="div" variant="h5" sx={{ mb: '1rem' }}>
                        {jobOffer.user.employerName ?? 'No name'}
                      </Typography>
                      <p ref={employerDescriptionRef} />
                    </StyledContentContainer>
                  </Grid>
                </Grid>
              </CompanyInfoContainer>
              <Typography component="h4" variant="h4" textAlign="center" sx={{ mt: '1rem' }}>Job Offer</Typography>
              <JobInfoContainer sx={{ mt: '1rem' }}>
                <Typography component="h4" variant="h4">{jobOffer.offerName}</Typography>
                <Box ref={jobOfferRef} />
              </JobInfoContainer>
              <Typography component="h4" variant="h4" textAlign="center" sx={{ my: '1rem' }}>Additional Information</Typography>
              <Box>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Grid item>
                    <AditionalInfoContainer>
                      <Typography component="h5" variant="h5">Salary</Typography>
                      <p>
                        {jobOffer.salaryFrom}
                        {' '}
                        -
                        {' '}
                        {jobOffer.salaryTo}
                        {' '}
                        € / mon.
                        {' '}
                        {jobOffer.salaryType}
                      </p>
                    </AditionalInfoContainer>
                  </Grid>
                  <Grid item>
                    <AditionalInfoContainer>
                      <Typography component="h5" variant="h5">City</Typography>
                      <p>{jobOffer.city}</p>
                    </AditionalInfoContainer>
                  </Grid>
                  <Grid item>
                    <AditionalInfoContainer>
                      <Typography component="h5" variant="h5">Time left</Typography>
                      <p>
                        {jobOffer.daysLeft}
                        {' '}
                        d.
                      </p>
                    </AditionalInfoContainer>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ alignSelf: 'start', mt: '2rem' }}>
                <ButtonOutlined onClick={handleReturn} btnText="Return" btnReturn sx={{ mr: '1rem' }} />
                <ButtonContained onClick={() => handleOpenModal(true)} btnText="Send CV" />
              </Box>
            </Box>
            <SendCvModal open={open} handleOpenModal={handleOpenModal} />
          </>
        )
        : 'nera' }
    </Container>
  );
};

export default JobPageJob;
