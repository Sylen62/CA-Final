import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MainContentContainer from '../../components/container/main-content-container';
import CardJob from '../../components/card/card-job';
import ListingsService from '../../services/listings-service';
import NoListingsContainer from '../../components/container/no-listings-container';

const JobPage = () => {
  const [loading, setLoading] = useState(true);
  const [jobOffers, setJobOffers] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { offers } = await ListingsService.getJobOffers();
      setJobOffers(offers);
      setLoading(false);
    })();
  }, []);

  return (
    <MainContentContainer maxWidth="xl">
      <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem', mt: '1rem' }}>Job Offers</Typography>
      { !loading && jobOffers ? (
        <Grid container columnSpacing={2} rowSpacing={4}>
          {jobOffers.map((data) => (
            <Grid item key={data.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardJob data={data} maxWidth="300px" />
            </Grid>
          ))}
        </Grid>
      ) : null }
      { !loading && !jobOffers ? (
        <NoListingsContainer>
          Currently there are no job offers. Come back later.
        </NoListingsContainer>
      ) : null }
    </MainContentContainer>
  );
};

export default JobPage;
