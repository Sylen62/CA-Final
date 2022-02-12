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

const CardCandidate = () => {
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
          <StyledCardMedia component="img" src="https://unsplash.it/200/201" />
          <CardHeader title="Candidate name" sx={{ py: '10px', textAlign: 'center' }} />
          <CardContent
            ref={cardTextRef}
            sx={{
              py: '10px',
              maxHeight: '132px',
            // overflow: 'hidden',
            // display: '-webkit-box',
            // ' -webkit-line-clamp': 7,
            // '-webkit-box-orient': 'vertical',
            }}
          >
            {/* Max 326 char */}
            <Typography
              variant="body2"
              textAlign="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda modi repellendus exercitationem reiciendis blanditiis,
              fuga nulla? Harum soluta eaque reprehenderit? rasdasdad asdasdasd asdasd asdasdasd
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, accusamus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid.
            </Typography>
          </CardContent>
          <CardActions sx={{ position: 'relative', height: '60px' }} />
        </Box>
      </Link>
      <Box sx={{
        display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 20, height: '40px', width: '100%',
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
