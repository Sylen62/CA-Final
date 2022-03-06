/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import {
  Box, Container, Grid, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image } from 'mui-image';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonOutlined from '../../components/button/button-outlined';
import SocialLinksContainer from '../../components/container/social-links-container';
import ListingsService from '../../services/listings-service';

const CandidateInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    height: '228px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '228px',
    // maxWidth: '80%',
  },
  [theme.breakpoints.up('md')]: {
    height: '266px',
    // maxWidth: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    height: '266px',
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

const CandidatePageCandidate = () => {
  const navigate = useNavigate();
  const fullDescriptionRef = useRef(null);
  const [fetchedCandidate, setFetchedCandidate] = useState();
  const [loading, setLoading] = useState(true);
  const { candidateId } = useParams();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { candidate } = await ListingsService.getCandidateById(candidateId);
      setFetchedCandidate(candidate);
      setLoading(false);
      fullDescriptionRef.current.innerHTML = JSON.parse(candidate.fullDescription);
    })();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '3vh' }}>
      { !loading
        ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h4" variant="h4" textAlign="center" sx={{ mb: '1rem' }}>Candidate</Typography>
            <CandidateInfoContainer>
              <Grid container sx={{ width: '100%', height: '100%' }}>
                <Grid item xs={12} md={4} sx={{ width: '100%', maxHeight: { xs: '10%', sm: '30%', lg: '100%' } }}>
                  <StyledImageBox>
                    <Image
                      src={fetchedCandidate.image ?? ''}
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
                    <Grid container sx={{ display: 'flex' }}>
                      <Grid item xs={12} sm={6}>
                        <Typography component="div" variant="h5" sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                          {fetchedCandidate.name}
                          {' '}
                          {fetchedCandidate.surname}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{
                          display: 'flex', width: '100%', justifyContent: { xs: 'center', sm: 'flex-end' }, flexWrap: 'wrap',
                        }}
                      >
                        <SocialLinksContainer
                          linkedIn={fetchedCandidate.linkedIn}
                          facebook={fetchedCandidate.facebook}
                          instagram={fetchedCandidate.instagram}
                          twitter={fetchedCandidate.twitter}
                        />
                      </Grid>
                      <Grid item>
                        <p>{fetchedCandidate.shortDescription}</p>
                      </Grid>
                    </Grid>
                  </StyledContentContainer>
                </Grid>
              </Grid>
            </CandidateInfoContainer>
            <Typography component="h4" variant="h4" textAlign="center" sx={{ mt: '1rem' }}>About Candidate</Typography>
            <JobInfoContainer sx={{ mt: '1rem' }}>
              <Box ref={fullDescriptionRef} />
            </JobInfoContainer>
            <Box sx={{ alignSelf: 'start', mt: '2rem' }}>
              <ButtonOutlined onClick={() => navigate(-1)} btnText="Return" btnReturn sx={{ mr: '1rem' }} />
            </Box>
          </Box>
        )
        : null}
    </Container>
  );
};

export default CandidatePageCandidate;
