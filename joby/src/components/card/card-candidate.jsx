import React from 'react';
import {
  Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  width: '300px',
  maxHeight: '500px',
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
  position: 'relative',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: '200px',
  maxWidth: '280px',
  objectFit: 'cover',
  objectPosition: 'center',
  padding: '10px',
  borderRadius: '20px',
}));

const CardCandidate = () => (
  <StyledCard>
    <Link
      to={`/candidates/${1}`}
      style={{
        textDecoration: 'none',
        textTransform: 'none',
        color: 'white',
        zIndex: '20',
      }}
    >
      <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
      <CardHeader title="Candidate name" sx={{ py: '10px' }} />
      <CardContent sx={{ py: '10px' }}>
        <Typography variant="body2" sx={{ mb: '2rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda modi repellendus exercitationem reiciendis blanditiis,
          fuga nulla? Harum soluta eaque reprehenderit?
        </Typography>
      </CardContent>
    </Link>
    <Box sx={{
      display: 'flex', justifyContent: 'flex-start', position: 'absolute', bottom: '1.1rem', left: '6px',
    }}
    >
      <IconButton href="https://www.linkedin.com/" target="_blank">
        <LinkedInIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
      <IconButton href="https://lt-lt.facebook.com/" target="_blank">
        <FacebookIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
      <IconButton href="https://twitter.com/" target="_blank">
        <TwitterIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
      <IconButton href="https://www.instagram.com/" target="_blank">
        <InstagramIcon sx={(theme) => ({ color: theme.palette.secondary.main })} />
      </IconButton>
    </Box>
  </StyledCard>
);

export default CardCandidate;
