import React from 'react';
import {
  Box, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '300px',
  maxHeight: '500px',
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
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Job title" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">1000 - 2000 €/month.</Typography>
                <Typography variant="caption">Net</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">Vilnius</Typography>
                <Typography variant="caption">Left 2d.</Typography>
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Job title" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">1000 - 2000 €/month.</Typography>
                <Typography variant="caption">Gross</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">Vilnius</Typography>
                <Typography variant="caption">Left 2d.</Typography>
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Job title" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">1000 - 2000 €/month.</Typography>
                <Typography variant="caption">Gross</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">Vilnius</Typography>
                <Typography variant="caption">Left 2d.</Typography>
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCard>
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Job title" sx={{ py: '10px' }} />
          <CardContent sx={{ py: '10px' }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit?
            </Typography>
            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">1000 - 2000 €/month.</Typography>
                <Typography variant="caption">Net</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">Vilnius</Typography>
                <Typography variant="caption">Left 2d.</Typography>
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
    {/* ------------------- */}
    <Typography component="h2" variant="h2" textAlign="center" sx={{ mb: '3rem', mt: '3rem' }}>Latest candidates</Typography>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
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
    </Grid>
  </Box>
);

export default HomePageLatestJobs;
