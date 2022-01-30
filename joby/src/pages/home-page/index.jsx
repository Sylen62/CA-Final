import React from 'react';
import { Container } from '@mui/material';

// Mano
import HomePageHero from './home-page-hero';
import HomePageLatestJobs from './home-page-latest-jobs';

const HomePage = () => (
  <>
    <HomePageHero />
    <Container maxWidth="xl">
      <HomePageLatestJobs />
    </Container>
  </>
);

export default HomePage;
