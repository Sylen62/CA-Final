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

const JobPage = () => (
  <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '7vh' }}>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      { Array.from(new Array(10)).map((_, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <StyledCard>
            <Link
              to="/jobs/id"
              style={{
                textDecoration: 'none',
                textTransform: 'none',
                color: 'white',
              }}
            >
              <StyledCardMedia component="img" src={`https://unsplash.it/200/20${i}`} />
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
            </Link>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default JobPage;
