import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import CardCandidate from '../../components/card/card-candidate';
import MainContentContainer from '../../components/container/main-content-container';
import ListingsService from '../../services/listings-service';
import NoListingsContainer from '../../components/container/no-listings-container';

const CandidatePage = () => {
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const fetchedCandidates = await ListingsService.getCandidates();
      setCandidates(fetchedCandidates.data.candidates);
      setLoading(false);
    })();
  }, []);
  return (
    <MainContentContainer maxWidth="xl">
      <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem', mt: '1rem' }}>Candidates</Typography>
      { !loading && candidates ? (
        <Grid container columnSpacing={2} rowSpacing={4}>
          {candidates.map((candidateData) => (
            <Grid item key={candidateData.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardCandidate data={candidateData} maxWidth="300px" height="180px" />
            </Grid>
          ))}
        </Grid>
      ) : null }
      { !loading && !candidates ? (
        <NoListingsContainer>
          Currently there are no candidates. Come back later.
        </NoListingsContainer>
      ) : null }
    </MainContentContainer>
  );
};

export default CandidatePage;
