/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CardSwiper from '../../components/card-swiper';
import CardCandidate from '../../components/card/card-candidate';
import LatestListingsContainer from '../../components/container/latest-listings-container';
import ListingsService from '../../services/listings-service';
import NoListingsContainer from '../../components/container/no-listings-container';

// const data = [
//   {
//     id: 1,
//     candidateLogo: 'https://unsplash.it/200/201',
//     candidateName: 'Candidate 1',
//     candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//     // Social links
//   },
//   {
//     id: 2,
//     candidateLogo: 'https://unsplash.it/200/202',
//     candidateName: 'Candidate 2',
//     candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//   },
//   {
//     id: 3,
//     candidateLogo: 'https://unsplash.it/200/203',
//     candidateName: 'Candidate 3',
//     candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//   },
//   {
//     id: 4,
//     candidateLogo: 'https://unsplash.it/200/204',
//     candidateName: 'Candidate 4',
//     candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//   },
//   {
//     id: 5,
//     candidateLogo: 'https://unsplash.it/200/205',
//     candidateName: 'Candidate 5',
//     candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//   },
//   {
//     id: 6,
//     candidateLogo: 'https://unsplash.it/200/206',
//     candidateName: 'Candidate 6',
//     candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//   },
// ];

const HomePageLatestCandidates = () => {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const fetchedCandidates = await ListingsService.getLatestCandidates();
      setCandidates(fetchedCandidates.data.candidates);
      setLoading(false);
    })();
  }, []);
  return (
    <LatestListingsContainer>
      <Typography component="h2" variant="h3" textAlign="center" sx={{ my: '3rem' }}>Latest Candidates</Typography>
      { !loading && candidates && candidates?.length > 0 ? (
        <CardSwiper>
          {candidates.map((candidateData) => (
            <SwiperSlide key={`${candidateData.id}`} style={{ marginRight: 0 }}>
              <CardCandidate data={candidateData} />
            </SwiperSlide>
          ))}
        </CardSwiper>
      ) : (
        <NoListingsContainer>Currently there are no candidates. Come back later.</NoListingsContainer>
      )}
    </LatestListingsContainer>
  );
};

export default HomePageLatestCandidates;
