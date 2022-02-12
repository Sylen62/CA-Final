import React from 'react';
import { Box, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import CardJob from '../../components/card/card-job';
import CardSwiper from '../../components/card-swiper';
import CardCandidate from '../../components/card/card-candidate';
import CardSwiperContainer from '../../components/container/card-swiper-container';

const data = [
  {
    id: 1,
    employerLogo: 'https://unsplash.it/200/201',
    title: 'Job 1',
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
    title: 'Job 2',
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
    title: 'Job 3',
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
    title: 'Job 3',
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
    title: 'Job 3',
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
    title: 'Job 3',
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
    <Typography component="h2" variant="h2" textAlign="center" sx={{ mb: '3rem' }}>Latest job listings</Typography>
    <CardSwiperContainer>
      <CardSwiper>
        {data.map((jobData) => (
          <SwiperSlide key={`${jobData.id + 1}`}>
            <CardJob data={jobData} />
          </SwiperSlide>
        ))}
      </CardSwiper>
    </CardSwiperContainer>
    {/* ------------------- */}
    <Typography component="h2" variant="h2" textAlign="center" sx={{ mb: '3rem', mt: '3rem' }}>Latest candidates</Typography>
    <CardSwiper>
      <SwiperSlide>
        <CardCandidate />
      </SwiperSlide>
      <SwiperSlide>
        <CardCandidate />
      </SwiperSlide>
      <SwiperSlide>
        <CardCandidate />
      </SwiperSlide>
      <SwiperSlide>
        <CardCandidate />
      </SwiperSlide>
      <SwiperSlide>
        <CardCandidate />
      </SwiperSlide>
      <SwiperSlide>
        <CardCandidate />
      </SwiperSlide>
    </CardSwiper>
    {/* <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Candidate name" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
              <IconButton>
                <LinkedInIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Candidate name" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
              <IconButton>
                <LinkedInIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Candidate name" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
              <IconButton>
                <LinkedInIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Candidate name" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
              <IconButton>
                <LinkedInIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
              </IconButton>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid> */}
  </Box>
);

export default HomePageLatestJobs;
