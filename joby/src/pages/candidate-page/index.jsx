import React from 'react';
import {
  CardContent, CardHeader, Container, Grid, Typography, Box, Card, CardMedia, IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
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

const CandidatePage = () => (
  <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '7vh' }}>
    <Grid container spacing={2} sx={{ display: 'flex', aligntItems: 'center' }}>
      { Array.from(new Array(10)).map((_, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <StyledCard>
            <Link
              to="/candidates/id"
              style={{
                textDecoration: 'none',
                textTransform: 'none',
                color: 'white',
              }}
            >
              <StyledCardMedia component="img" src={`https://unsplash.it/200/20${i}`} />
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
            </Link>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CandidatePage;
