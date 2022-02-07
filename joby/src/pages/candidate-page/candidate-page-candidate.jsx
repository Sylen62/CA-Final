import React from 'react';
import {
  Box, Container, Grid, IconButton, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image } from 'mui-image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const CompanyInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '227px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '227px',
  },
  [theme.breakpoints.up('md')]: {
    height: '227px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    height: '250px',
  },
}));

const StyledContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    marginLeft: '1rem',
    marginTop: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '1rem',
  },
}));

const JobInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const data = {
  id: 1,
  image: 'https://unsplash.it/500/400',
  candidateFullName: 'Vards Pavards',
  candidateShortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias unde fugiat repudiandae cupiditate id ad, molestias soluta itaque ab vero magni veritatis nihil, explicabo perspiciatis nemo amet blanditiis accusantium repellendus ea perferendis? Facilis voluptate numquam quas, id quidem dolorem beatae! Laboriosam esse cupiditate magni voluptate, nihil non error magnam, facilis ducimus ad iste aspernatur aliquam voluptatibus provident voluptatem aliquid! Quas nemo earum nostrum dolorem ducimus vero repellat ab, cumque minima nisi recusandae rerum eligendi modi quo inventore magni quaerat provident natus! Tempore expedita placeat laudantium, cumque amet illo quod soluta non delectus adipisci aliquam saepe beatae nihil, maiores natus consequatur!',
  candidateFullDescription: 'asdasdasdadsadsasd',
};

const CandidatePageCandidate = () => (
  <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '3vh' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h4" variant="h4" textAlign="center" sx={{ mb: '1rem' }}>Candidate</Typography>
      <CompanyInfoContainer>
        <Grid container sx={{ width: '100%', height: '100%' }}>
          <Grid item xs={12} md={4} sx={{ width: '100%', maxHeight: { xs: '10%', sm: '30%', lg: '100%' } }}>
            <StyledImageBox>
              <Image
                src={data.image}
                duration={500}
                height="100%"
                width="100%"
                sx={{
                  borderRadius: '10px',
                  objectPosition: 'center',
                }}
              />
            </StyledImageBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledContentContainer>
              <Box sx={{ display: 'flex' }}>
                <Typography component="div" variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                  {data.candidateFullName}
                </Typography>
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
              <p>{data.candidateShortDescription}</p>
            </StyledContentContainer>
          </Grid>
        </Grid>
      </CompanyInfoContainer>
      <Typography component="h4" variant="h4" textAlign="center" sx={{ mt: '1rem' }}>About Candidate</Typography>
      <JobInfoContainer sx={{ mt: '1rem' }}>
        {data.candidateFullDescription}
      </JobInfoContainer>
    </Box>
  </Container>
);

export default CandidatePageCandidate;
