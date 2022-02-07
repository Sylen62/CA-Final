import React from 'react';
import {
  CardContent, CardHeader, Container, Grid, Typography, Box, Card, CardMedia,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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
];

const JobPage = () => (
  <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '7vh' }}>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      { data.map(({
        id, employerLogo, title, employerDescription, minWage, maxWage, wageType, city, activeFor,
      }) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <StyledCard>
            <Link
              to={`/jobs/${id}`}
              style={{
                textDecoration: 'none',
                textTransform: 'none',
                color: 'white',
              }}
            >
              <StyledCardMedia component="img" src={employerLogo} />
              <CardHeader title={title} sx={{ py: '10px' }} />
              <CardContent sx={{ py: '10px' }}>
                <Typography variant="body2">
                  {employerDescription}
                </Typography>
                <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body1">
                      {minWage}
                      {' '}
                      -
                      {' '}
                      {maxWage}
                      {' '}
                      €/month.
                    </Typography>
                    <Typography variant="caption">{wageType}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body1">{city}</Typography>
                    <Typography variant="caption">
                      Left
                      {' '}
                      {activeFor}
                      d.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Link>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default JobPage;
