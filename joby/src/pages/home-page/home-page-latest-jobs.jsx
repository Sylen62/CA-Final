import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CardJob from '../../components/card/card-job';
import CardSwiper from '../../components/card-swiper';
import LatestListingsContainer from '../../components/container/latest-listings-container';
import NoListingsContainer from '../../components/container/no-listings-container';
import ListingsService from '../../services/listings-service';

const HomePageLatestJobs = ({ setInfoSnackbar }) => {
  const [loading, setLoading] = useState(true);
  const [jobOffers, setJobOffers] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { offers, success, message } = await ListingsService.getLatestJobOffers();
      setJobOffers(offers);
      if (!success) setInfoSnackbar({ open: true, success, message });
      setLoading(false);
    })();
  }, []);

  return (
    <LatestListingsContainer>
      <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem' }}>Latest Job Offers</Typography>
      { !loading && jobOffers && jobOffers.length > 0 ? (
        <CardSwiper>
          {jobOffers.map((jobData) => (
            <SwiperSlide key={`${jobData.id}`}>
              <CardJob data={jobData} />
            </SwiperSlide>
          ))}
        </CardSwiper>
      ) : null}
      { !loading && !jobOffers ? (
        <NoListingsContainer>
          Currently there are no job offers. Come back later.
        </NoListingsContainer>
      ) : null}
    </LatestListingsContainer>
  );
};

export default HomePageLatestJobs;
