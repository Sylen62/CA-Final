import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CardSwiper from '../../components/card-swiper';
import CardCandidate from '../../components/card/card-candidate';
import LatestListingsContainer from '../../components/container/latest-listings-container';
import ListingsService from '../../services/listings-service';
import NoListingsContainer from '../../components/container/no-listings-container';

const HomePageLatestCandidates = ({ setInfoSnackbar }) => {
  const [loading, setLoading] = useState(true);
  const [fetchedCandidates, setfetchedCandidates] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { candidates, success, message } = await ListingsService.getLatestCandidates();
      setfetchedCandidates(candidates);
      if (!success) setInfoSnackbar({ open: true, success, message });
      setLoading(false);
    })();
  }, []);
  return (
    <LatestListingsContainer>
      <Typography component="h2" variant="h3" textAlign="center" sx={{ my: '3rem' }}>Latest Candidates</Typography>
      { !loading && fetchedCandidates && fetchedCandidates?.length > 0 ? (
        <CardSwiper>
          {fetchedCandidates.map((candidateData) => (
            <SwiperSlide key={`${candidateData.id}`} style={{ marginRight: 0 }}>
              <CardCandidate data={candidateData} />
            </SwiperSlide>
          ))}
        </CardSwiper>
      ) : null}
      { !loading && !fetchedCandidates ? (
        <NoListingsContainer>
          Currently there are no candidates. Come back later.
        </NoListingsContainer>
      ) : null}
    </LatestListingsContainer>
  );
};

export default HomePageLatestCandidates;
