/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CardJob from '../../components/card/card-job';
import CardSwiper from '../../components/card-swiper';
import LatestListingsContainer from '../../components/container/latest-listings-container';
// import JobOfferService from '../../services/job-offer-service';
import NoListingsContainer from '../../components/container/no-listings-container';
import ListingsService from '../../services/listings-service';

// const data = [
//   {
//     id: 1,
//     employerLogo: 'https://unsplash.it/200/201',
//     title: 'Company 1',
//     jobTitle: 'Front-End junior react developer',
//     employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//     minWage: 1000,
//     maxWage: 2000,
//     wageType: 'Net',
//     city: 'Vilnius',
//     activeFor: 2,
//   },
//   {
//     id: 2,
//     employerLogo: 'https://unsplash.it/200/202',
//     title: 'Company 2',
//     jobTitle: 'Front-End junior react developer',
//     employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//     minWage: 800,
//     maxWage: 1800,
//     wageType: 'Net',
//     city: 'Kaunas',
//     activeFor: 21,
//   },
//   {
//     id: 3,
//     employerLogo: 'https://unsplash.it/200/203',
//     title: 'Company 3',
//     jobTitle: 'Front-End junior react developer',
//     employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//     minWage: 1200,
//     maxWage: 2400,
//     wageType: 'Gross',
//     city: 'Vilnius',
//     activeFor: 1,
//   },
//   {
//     id: 4,
//     employerLogo: 'https://unsplash.it/200/203',
//     title: 'Company 3',
//     jobTitle: 'Front-End junior react developer asd as das dasd as da asd 123 12 3123 123 123 sd adsadasds asdasds asdasd asdasd asdasdasd asdsad',
//     employerDescription: 'aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa bbbbb aaaaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//     minWage: 1200,
//     maxWage: 2400,
//     wageType: 'Gross',
//     city: 'Vilnius',
//     activeFor: 1,
//   },
//   {
//     id: 5,
//     employerLogo: 'https://unsplash.it/200/203',
//     title: 'Company 3',
//     jobTitle: 'Front-End junior react developer',
//     employerDescription: 'Sulla? Harum soluta eaque reprehenderit?',
//     minWage: 1200,
//     maxWage: 2400,
//     wageType: 'Gross',
//     city: 'Vilnius',
//     activeFor: 1,
//   },
//   {
//     id: 6,
//     employerLogo: 'https://unsplash.it/200/203',
//     title: 'Company 3',
//     jobTitle: 'Front-End junior react developer',
//     employerDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi repellendus exercitationem reiciendis blanditiis, fuga nulla? Harum soluta eaque reprehenderit?',
//     minWage: 1200,
//     maxWage: 2400,
//     wageType: 'Gross',
//     city: 'Vilnius',
//     activeFor: 1,
//   },
// ];

const HomePageLatestJobs = () => {
  const [loading, setLoading] = useState(false);
  const [jobOffers, setJobOffers] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const fetchedJobOffers = await ListingsService.getLatestJobOffers();
      setJobOffers(fetchedJobOffers.data.offers);
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
      ) : (
        <NoListingsContainer>Currently there are no job offers. Come back later.</NoListingsContainer>
      )}
    </LatestListingsContainer>
  );
};

export default HomePageLatestJobs;
