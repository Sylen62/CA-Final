import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import jobImg from '../../images/job1.jpg';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '70vh',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const HeroContentContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    zIndex: '3',
  },
}));

const HeroImageContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${jobImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${jobImg})`,
    display: 'block',
    position: 'absolute',
    width: '100%',
    zIndex: '2',
  },
}));

const HeroContentText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '8.5vw',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '8.5vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.5vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '6vw',
  },
}));

const HeroContentTextColor = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const HomePageHero = () => (
  <HeroContainer>
    <HeroContentContainer>
      <HeroContentText component="h2" variant="h2" textAlign="center">
        <HeroContentTextColor>Find </HeroContentTextColor>
        your
        <HeroContentTextColor> next </HeroContentTextColor>
        IT
        <br />
        <HeroContentTextColor> home </HeroContentTextColor>
        /
        <HeroContentTextColor> team </HeroContentTextColor>
      </HeroContentText>
    </HeroContentContainer>
    <HeroImageContainer />
  </HeroContainer>
);

export default HomePageHero;
