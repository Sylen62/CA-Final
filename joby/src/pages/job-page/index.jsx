import React from 'react';
import { Grid, Typography } from '@mui/material';
import MainContentContainer from '../../components/container/main-content-container';
import CardJob from '../../components/card/card-job';

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

const JobPage = () => (
  <MainContentContainer maxWidth="xl">
    <Typography component="h2" variant="h3" textAlign="center" sx={{ mb: '3rem', mt: '1rem' }}>Job Offers</Typography>
    <Grid container columnSpacing={2} rowSpacing={4}>
      { data.map((jobData) => (
        <Grid item key={jobData.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardJob data={jobData} maxWidth="300px" />
        </Grid>
      ))}
    </Grid>
  </MainContentContainer>
);

export default JobPage;
