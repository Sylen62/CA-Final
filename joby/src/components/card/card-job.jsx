import React, { useEffect, useRef } from 'react';
import {
  CardContent, CardHeader, Typography, Box, Card, CardMedia, CardActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  width: '300px',
  height: '500px',
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  height: '200px',
  maxWidth: '280px',
  objectFit: 'cover',
  objectPosition: 'center',
  padding: '10px',
  borderRadius: '20px',
}));

const CardJob = ({ data }) => {
  const cardTextRef = useRef(null);
  const {
    id, employerLogo, title, employerDescription, minWage, maxWage, wageType, city, activeFor,
  } = data;

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
          <Box ref={cardTextRef} sx={{ maxHeight: '132px' }}>
            <Typography variant="body2">
              {employerDescription}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
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
        </CardActions>
      </Link>
    </StyledCard>
  );
};

export default CardJob;
