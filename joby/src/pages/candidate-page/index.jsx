import React from 'react';
import { Container, Grid } from '@mui/material';
import CardCandidate from '../../components/card/card-candidate';

const CandidatePage = () => (
  <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '7vh' }}>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      { Array.from(new Array(10)).map((_, i) => (
        <Grid item key={`${i + 1}`} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardCandidate />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CandidatePage;
