import React from 'react';
import {
  Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '300px',
  height: '500px',
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: '200px',
  objectFit: 'cover',
  objectPosition: 'center',
  padding: '10px',
  borderRadius: '20px',
}));

const HomePageLatestJobs = () => (
  <Box sx={{ mt: '7vh', mb: '7vh' }}>
    <Typography component="h2" variant="h2" textAlign="center" sx={{ mb: '3rem' }}>Latest job listings</Typography>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Job title" />
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Job title" />
          <StyledCardMedia component="img" src="https://unsplash.it/200/202" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Job title" />
          <StyledCardMedia component="img" src="https://unsplash.it/200/203" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Job title" />
          <StyledCardMedia component="img" src="https://unsplash.it/200/204" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
    {/* ------------------- */}
    <Typography component="h2" variant="h2" textAlign="center" sx={{ mb: '3rem', mt: '3rem' }}>Latest candidates</Typography>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Candidate name" />
          <StyledCardMedia component="img" src="https://unsplash.it/201/201" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Candidate name" />
          <StyledCardMedia component="img" src="https://unsplash.it/202/202" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Candidate name" />
          <StyledCardMedia component="img" src="https://unsplash.it/203/203" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <CardHeader title="Candidate name" />
          <StyledCardMedia component="img" src="https://unsplash.it/204/204" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  </Box>
);

export default HomePageLatestJobs;
