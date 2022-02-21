import React from 'react';
import { Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CardSwiper from '../../components/card-swiper';
import CardCandidate from '../../components/card/card-candidate';
import CardSwiperContainer from '../../components/container/card-swiper-container';
import LatestListingsContainer from '../../components/container/latest-listings-container';

const data = [
  {
    id: 1,
    candidateLogo: 'https://unsplash.it/200/201',
    candidateName: 'Candidate 1',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
    // Social links
  },
  {
    id: 2,
    candidateLogo: 'https://unsplash.it/200/202',
    candidateName: 'Candidate 2',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
  {
    id: 3,
    candidateLogo: 'https://unsplash.it/200/203',
    candidateName: 'Candidate 3',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
  {
    id: 4,
    candidateLogo: 'https://unsplash.it/200/204',
    candidateName: 'Candidate 4',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
  {
    id: 5,
    candidateLogo: 'https://unsplash.it/200/205',
    candidateName: 'Candidate 5',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
  {
    id: 6,
    candidateLogo: 'https://unsplash.it/200/206',
    candidateName: 'Candidate 6',
    candidateLookingFor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
  },
];

const HomePageLatestCandidates = () => (
  <LatestListingsContainer>
    <Typography component="h2" variant="h3" textAlign="center" sx={{ my: '3rem' }}>Latest Candidates</Typography>
    <CardSwiperContainer>
      <CardSwiper>
        {data.map((candidate) => (
          <SwiperSlide key={`${candidate.id + 1}`}>
            <CardCandidate data={candidate} height="135px" />
          </SwiperSlide>
        ))}
      </CardSwiper>
    </CardSwiperContainer>
  </LatestListingsContainer>
);

export default HomePageLatestCandidates;
