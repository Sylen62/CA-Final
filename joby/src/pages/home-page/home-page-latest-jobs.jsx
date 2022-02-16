import React from 'react';
import { Box, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CardJob from '../../components/card/card-job';
import CardSwiper from '../../components/card-swiper';
import CardSwiperContainer from '../../components/container/card-swiper-container';

const data = [
  {
    id: 1,
    employerLogo: 'https://unsplash.it/200/201',
    title: 'Company 1',
    jobTitle: 'Front-End junior react developer',
    employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
    minWage: 1000,
    maxWage: 2000,
    wageType: 'Net',
    city: 'Vilnius',
    activeFor: 2,
  },
  {
    id: 2,
    employerLogo: 'https://unsplash.it/200/202',
    title: 'Company 2',
    jobTitle: 'Front-End junior react developer',
    employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
    minWage: 800,
    maxWage: 1800,
    wageType: 'Net',
    city: 'Kaunas',
    activeFor: 21,
  },
  {
    id: 3,
    employerLogo: 'https://unsplash.it/200/203',
    title: 'Company 3',
    jobTitle: 'Front-End junior react developer',
    employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
    minWage: 1200,
    maxWage: 2400,
    wageType: 'Gross',
    city: 'Vilnius',
    activeFor: 1,
  },
  {
    id: 4,
    employerLogo: 'https://unsplash.it/200/203',
    title: 'Company 3',
    jobTitle: 'Front-End junior react developer asd as das dasd as da asd 123 12 3123 123 123 sd adsadasds asdasds asdasd asdasd asdasdasd asdsad',
    employerDescription: 'aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa bbbbb aaaaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
    minWage: 1200,
    maxWage: 2400,
    wageType: 'Gross',
    city: 'Vilnius',
    activeFor: 1,
  },
  {
    id: 5,
    employerLogo: 'https://unsplash.it/200/203',
    title: 'Company 3',
    jobTitle: 'Front-End junior react developer',
    employerDescription: 'Sulla? Harum soluta eaque reprehenderit?',
    minWage: 1200,
    maxWage: 2400,
    wageType: 'Gross',
    city: 'Vilnius',
    activeFor: 1,
  },
  {
    id: 6,
    employerLogo: 'https://unsplash.it/200/203',
    title: 'Company 3',
    jobTitle: 'Front-End junior react developer',
    employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
    minWage: 1200,
    maxWage: 2400,
    wageType: 'Gross',
    city: 'Vilnius',
    activeFor: 1,
  },
];

const HomePageLatestJobs = () => (
  <Box sx={{ mt: '7vh', mb: '7vh', width: '100%' }}>
    <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem' }}>Latest Job Offers</Typography>
    <CardSwiperContainer>
      <CardSwiper>
        {data.map((jobData) => (
          <SwiperSlide key={`${jobData.id + 1}`}>
            <CardJob data={jobData} />
          </SwiperSlide>
        ))}
      </CardSwiper>
    </CardSwiperContainer>
  </Box>
);

export default HomePageLatestJobs;
