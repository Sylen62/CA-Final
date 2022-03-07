import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import MainContentContainer from '../../components/container/main-content-container';
import CardJob from '../../components/card/card-job';
import ListingsService from '../../services/listings-service';
import NoListingsContainer from '../../components/container/no-listings-container';

const JobPage = () => {
  const [loading, setLoading] = useState(true);
  const [jobOffers, setJobOffers] = useState();
  const [totalOffers, setTotalOffers] = useState(0);
  const [offersToLoad, setOffersToLoad] = useState(8);
  const [hasMore, setHasMore] = useState(true);

  const fetchJobOffers = async () => {
    setLoading(true);
    const { offers, total } = await ListingsService.getJobOffers(offersToLoad);
    setJobOffers(offers);
    setTotalOffers(total);
    setOffersToLoad(offersToLoad + 4);
    setLoading(false);
  };

  const fetchMoreJobOffers = async () => {
    const { offers } = await ListingsService.getJobOffers(offersToLoad);
    setJobOffers(offers);
    setOffersToLoad(offersToLoad + 4);
    if (offers.length >= totalOffers) setHasMore(false);
  };

  useEffect(() => {
    fetchJobOffers();
  }, []);

  return (
    <MainContentContainer maxWidth="xl">
      <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem', mt: '1rem' }}>Job Offers</Typography>
      { !loading
        ? (
          <InfiniteScroll
            dataLength={jobOffers.length}
            next={fetchMoreJobOffers}
            hasMore={hasMore}
            loader={<NoListingsContainer sx={{ marginTop: '2.5rem' }}>Loading</NoListingsContainer>}
            endMessage={<NoListingsContainer sx={{ marginTop: '2.5rem' }}>That`s it.</NoListingsContainer>}
          >
            { jobOffers ? (
              <Grid container columnSpacing={2} rowSpacing={4}>
                {jobOffers.map((data) => (
                  <Grid item key={data.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CardJob data={data} maxWidth="300px" />
                  </Grid>
                ))}
              </Grid>
            ) : null }
          </InfiniteScroll>
        )
        : null }
      { !loading && !jobOffers ? (
        <NoListingsContainer>
          Currently there are no job offers. Come back later.
        </NoListingsContainer>
      ) : null }
    </MainContentContainer>
  );
};

export default JobPage;
