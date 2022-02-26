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

const CardJob = ({ data, maxWidth }) => {
  const cardTextRef = useRef(null);
  const {
    id, user: { image, employerName }, offerName, salaryFrom, salaryTo, salaryType, city,
    activeUntill,
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
        <StyledCardMedia component="img" src={image} sx={{ maxWidth }} />
        <Box sx={{
          height: '260px', position: 'relative', display: 'flex', flexDirection: 'column',
        }}
        >
          <CardHeader title={employerName} sx={{ py: '10px', textAlign: 'center' }} />
          <CardContent
            ref={cardTextRef}
            sx={{
              py: '10px', display: 'flex', alignItems: 'center', height: '135px',
            }}
          >
            <Typography variant="h6" textAlign="center">
              {offerName}
            </Typography>
          </CardContent>
          <CardActions sx={{
            position: 'absolute', bottom: 0, left: 10, right: 10,
          }}
          >
            <Box sx={{
              mt: '1rem', width: '100%', display: 'flex', justifyContent: 'space-between',
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">
                  {salaryFrom}
                  {' '}
                  -
                  {' '}
                  {salaryTo}
                  {' '}
                  €/month.
                </Typography>
                <Typography variant="caption">{salaryType}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1">{city}</Typography>
                <Typography variant="caption">
                  Left
                  {' '}
                  {activeUntill}
                  d.
                </Typography>
              </Box>
            </Box>
          </CardActions>
        </Box>
      </Link>
    </StyledCard>
  );
};

export default CardJob;
