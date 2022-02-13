import React from 'react';
import { Grid, Typography } from '@mui/material';
import CardCandidate from '../../components/card/card-candidate';
import MainContentContainer from '../../components/container/main-content-container';

const CandidatePage = () => (
  <MainContentContainer>
    <Typography component="h2" variant="h4" textAlign="center" sx={{ mb: '1rem' }}>Candidates</Typography>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      { Array.from(new Array(10)).map((_, i) => (
        <Grid item key={`${i + 1}`} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardCandidate />
        </Grid>
      ))}
    </Grid>
  </MainContentContainer>
);

export default CandidatePage;
