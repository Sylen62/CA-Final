import React from 'react';
import { Container } from '@mui/material';

// Mano
import HomePageHero from './home-page-hero';
import HomePageLatestJobs from './home-page-latest-jobs';
import HomePageLatestCandidates from './home-page-latest-candidates';

const HomePage = () => (
  <>
    <HomePageHero />
    <Container maxWidth="xl">
      <HomePageLatestJobs />
      <HomePageLatestCandidates />
    </Container>
  </>
);

export default HomePage;
