import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardCandidate from '../../components/card/card-candidate';
import MainContentContainer from '../../components/container/main-content-container';
import ListingsService from '../../services/listings-service';
import NoListingsContainer from '../../components/container/no-listings-container';

const CandidatePage = () => {
  const [loading, setLoading] = useState(true);
  const [fetchedCandidates, setFetchedCandidates] = useState();
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [candidatesToLoad, setCandidatesToLoad] = useState(8);
  const [hasMore, setHasMore] = useState(true);

  const fetchCandidates = async () => {
    setLoading(true);
    const { candidates, total } = await ListingsService.getCandidates(candidatesToLoad);
    setFetchedCandidates(candidates);
    setTotalCandidates(total);
    setCandidatesToLoad(candidatesToLoad + 4);
    setLoading(false);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchMoreCandidates = async () => {
    const { candidates } = await ListingsService.getCandidates(candidatesToLoad);
    setFetchedCandidates(candidates);
    setCandidatesToLoad(candidatesToLoad + 4);
    if (candidates.length >= totalCandidates) setHasMore(false);
  };

  return (
    <MainContentContainer maxWidth="xl">
      <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem', mt: '1rem' }}>Candidates</Typography>
      { !loading
        ? (
          <InfiniteScroll
            dataLength={fetchedCandidates.length}
            next={fetchMoreCandidates}
            hasMore={hasMore}
            loader={<NoListingsContainer sx={{ marginTop: '2.5rem' }}>Loading</NoListingsContainer>}
            endMessage={<NoListingsContainer sx={{ marginTop: '2.5rem' }}>That`s it.</NoListingsContainer>}
          >
            { fetchedCandidates ? (
              <Grid container columnSpacing={2} rowSpacing={4}>
                {fetchedCandidates.map((candidateData) => (
                  <Grid item key={candidateData.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CardCandidate data={candidateData} maxWidth="300px" height="180px" />
                  </Grid>
                ))}
              </Grid>
            ) : null }
          </InfiniteScroll>
        )
        : null }
      { !loading && !fetchedCandidates ? (
        <NoListingsContainer>
          Currently there are no candidates. Come back later.
        </NoListingsContainer>
      ) : null }
    </MainContentContainer>
  );
};

export default CandidatePage;
