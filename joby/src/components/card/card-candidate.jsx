import React, { useEffect, useRef } from 'react';
import {
  Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SocialLinksContainer from '../containers/social-links-container';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  width: '300px',
  height: '500px',
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

const CardCandidate = ({ data, maxWidth }) => {
  const cardTextRef = useRef(null);

  useEffect(() => {
    const wordArray = cardTextRef.current.innerHTML.split(' ');
    while (cardTextRef.current.scrollHeight > cardTextRef.current.offsetHeight) {
      wordArray.pop();
      cardTextRef.current.innerHTML = `${wordArray.join(' ')}...`;
    }
  }, [cardTextRef]);

  return (
    <StyledCard>
      <Link
        to={`/candidates/${1}`}
        style={{
          textDecoration: 'none',
          textTransform: 'none',
          color: 'white',
        }}
      >
        <Box sx={{ position: 'relative', height: '100%' }}>
          <StyledCardMedia component="img" src={data.candidateLogo} sx={{ maxWidth }} />
          <CardHeader title={data.candidateName} sx={{ py: '10px', textAlign: 'center' }} />
          <CardContent
            ref={cardTextRef}
            sx={{
              py: '10px',
              display: 'flex',
              alignItems: 'center',
              height: '135px',
            }}
          >
            {/* Max 300 char */}
            <Typography
              variant="body2"
              textAlign="center"
            >
              {data.candidateLookingFor}
            </Typography>
          </CardContent>
          <CardActions sx={{ position: 'relative', height: '60px' }} />
        </Box>
      </Link>
      <Box sx={{
        display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 25, height: '40px', width: '100%',
      }}
      >
        <SocialLinksContainer
          linkedIn="https://www.linkedin.com/"
          facebook="https://lt-lt.facebook.com/"
          instagram="https://twitter.com/"
          twitter="https://www.instagram.com/"
        />
      </Box>
    </StyledCard>
  );
};

export default CardCandidate;
